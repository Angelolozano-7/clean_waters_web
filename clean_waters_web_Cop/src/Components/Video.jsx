import React, { useRef, useEffect, useState } from 'react';
import './Video.css'; // Import the CSS for the video

const Video = ({ scrollToMyDiv, idDiv, src, title }) => {
  const videoRef = useRef(null); // Reference to the video element
  const [progress, setProgress] = useState(0); // State to track video progress
  const [isPaused, setIsPaused] = useState(true); // State to track play/pause status

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          playVideoSafely();
        } else {
          videoRef.current.pause();
        }
      },
      {
        threshold: 0.85
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleProgress = () => {
      if (videoRef.current) {
        const percent = (videoRef.current.currentTime / videoRef.current.duration) * 100;
        setProgress(percent);
      }
    };

    videoRef.current.addEventListener('timeupdate', handleProgress);
    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('timeupdate', handleProgress);
      }
    };
  }, []);

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      playVideoSafely();
    } else {
      videoRef.current.pause();
    }
    setIsPaused(videoRef.current.paused);
  };

  const playVideoSafely = () => {
    const playPromise = videoRef.current.play();

    if (playPromise !== undefined) {
      playPromise.then(() => {
        setIsPaused(false);
      }).catch(error => {
        console.log("Playback was blocked");
        setIsPaused(true);
      });
    }
  };

  return (
    <div className="video-container" onClick={togglePlayPause}>
      <div className='videoC'>
        <video ref={videoRef} onEnded={() => scrollToMyDiv(idDiv)} className='videoP'>
          <source src={src} type="video/mp4" />
          {title}
        </video>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
      {isPaused && <div className="play-button"></div>}
    </div>
  );
};

export default Video;
