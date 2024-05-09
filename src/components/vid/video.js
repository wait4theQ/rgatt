import React, { useState, useRef, useEffect } from 'react';
import videoSrc from '../../img/video.mp4';
import "../vid/video.css";

const VideoSection = () => {
    const [videoState, setVideoState] = useState('normal'); // Estado inicial
    const videoRef = useRef(null); // Referência para o elemento de vídeo

    const toggleVideoState = () => {
        if (videoState === 'normal') {
            videoRef.current.pause(); // Pausa o vídeo ao minimizar
        } else {
            videoRef.current.play(); // Reproduz o vídeo ao maximizar
        }
        setVideoState(prevState => prevState === 'normal' ? 'minimized' : 'normal');
    };

    const handleOverlayClick = (event) => {
        if (event.currentTarget === event.target) {
            videoRef.current.pause(); // Pausa o vídeo ao clicar fora dele no overlay
            setVideoState('minimized');
        }
    };

    // Garante que o vídeo esteja pausado ao carregar a página
    useEffect(() => {
        videoRef.current.pause();
    }, []);

    return (
        <div className="video-section" style={{ pointerEvents: videoState === 'normal' ? 'auto' : 'none' }}>
            <div className="video-overlay" onClick={handleOverlayClick} style={{ visibility: videoState === 'normal' ? 'visible' : 'hidden', opacity: videoState === 'normal' ? 1 : 0 }}>
                <div className="video-modal" onClick={(e) => e.stopPropagation()}>
                    <div className="minimize-icon" onClick={toggleVideoState}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                        </svg>
                    </div>
                    <h3>Assista ao vídeo antes de comprar o curso!</h3>
                    <video ref={videoRef} width="100%" height="auto" controls>
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                </div>
            </div>
            <button className={`video-minimized ${videoState === 'minimized' ? '' : 'hidden'}`} onClick={toggleVideoState} style={{ pointerEvents: 'auto' }}>
                Assista o Vídeo
            </button>
        </div>
    );
};

export default VideoSection;
