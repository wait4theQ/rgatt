import React, { useState } from 'react';
import videoSrc from '../../img/video.mp4';
import "../vid/video.css";

const VideoSection = () => {
    const [videoState, setVideoState] = useState('normal'); // Estados: 'normal', 'minimized'

    const toggleVideoState = () => {
        setVideoState(videoState === 'normal' ? 'minimized' : 'normal');
    };

    // Função para minimizar ao clicar fora do vídeo
    const handleOverlayClick = (event) => {
        if (event.target.className.includes("video-overlay")) {
            setVideoState('minimized');
        }
    };

    return (
        <div className="video-section">
            {videoState === 'normal' && (
                <div className="video-overlay" onClick={handleOverlayClick}>
                    <div className="video-modal">
                        <div className="minimize-icon" onClick={toggleVideoState}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                            </svg>
                        </div>
                        <h3>Assista ao vídeo antes de comprar o curso!</h3>
                        <video width="100%" height="auto" controls autoPlay>
                            <source src={videoSrc} type="video/mp4" />
                        </video>
                    </div>
                </div>
            )}
            {videoState === 'minimized' && (
                <button className="video-minimized" onClick={toggleVideoState}>Assista o Vídeo</button>
            )}
        </div>
    );
};

export default VideoSection;
