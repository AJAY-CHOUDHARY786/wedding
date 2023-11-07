import React, { useRef } from 'react';

function VideoPlayer({ videoSource }) {
    const videoStyle = {
        width: "100%",
        padding: "20px",
        
      };


  const videoRef = useRef(null);

  // const toggleFullScreen = () => {
  //   if (videoRef.current) {
  //     if (videoRef.current.requestFullscreen) {
  //       videoRef.current.requestFullscreen();
  //     } else if (videoRef.current.mozRequestFullScreen) {
  //       videoRef.current.mozRequestFullScreen();
  //     } else if (videoRef.current.webkitRequestFullscreen) {
  //       videoRef.current.webkitRequestFullscreen();
  //     } else if (videoRef.current.msRequestFullscreen) {
  //       videoRef.current.msRequestFullscreen();
  //     }
  //   }
  // };
  const toggleFullScreen = () => {
    const videoElement = videoRef.current;
  
    if (videoElement) {
      if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen().then(() => {
          // Check if the document is in full-screen mode
          if (document.fullscreenElement) {
            // Unmute the video
            videoElement.muted = false;
          }
        });
      } else if (videoElement.mozRequestFullScreen) {
        videoElement.mozRequestFullScreen().then(() => {
          // Check if the document is in full-screen mode
          if (document.mozFullScreenElement) {
            // Unmute the video
            videoElement.muted = false;
          }
        });
      } else if (videoElement.webkitRequestFullscreen) {
        videoElement.webkitRequestFullscreen().then(() => {
          // Add an event listener to check for changes in full-screen mode
          document.addEventListener('webkitfullscreenchange', () => {
            if (document.webkitIsFullScreen) {
              // Unmute the video
              videoElement.muted = false;
            } else {
              videoElement.muted = true;
            }
          });
        });
      } else if (videoElement.msRequestFullscreen) {
        videoElement.msRequestFullscreen().then(() => {
          // Check if the document is in full-screen mode
          if (document.msFullscreenElement) {
            // Unmute the video
            videoElement.muted = false;
          }
        });
      }
    }
  };
  return (
    <div>
      <video ref={videoRef} controls autoPlay loop muted onClick={toggleFullScreen}  style={videoStyle} >
        <source src={videoSource} type="video/mp4" />
       
      </video>
    </div>
  );
}

export default VideoPlayer;