import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import './videoPlayer.css';

const VideoPlayer = ({ videoUrl }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoUrl);
      hls.attachMedia(videoRef.current);
    } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
      videoRef.current.src = videoUrl;
    }
  }, [videoUrl]);

  return (
    <div>
      <video ref={videoRef} controls className='video'/>
    </div>
  );
};

export default VideoPlayer;





