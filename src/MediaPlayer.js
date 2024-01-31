import React from 'react';
import { Play, Pause } from 'react-feather';

import VisuallyHidden from './VisuallyHidden';

function MediaPlayer({ src }) {
  const audioRef = React.useRef();
  const [isPlaying, setIsPlaying] = React.useState(false);

  return (
    <div className="wrapper">
      <div className="media-player">
        <img
          alt=""
          src="https://sandpack-bundler.vercel.app/img/take-it-easy.png"
        />
        <div className="summary">
          <h2>Take It Easy</h2>
          <p>Bvrnout ft. Mia Vaile</p>
        </div>
        <button
          onClick={() => {
            if (isPlaying) {
              audioRef.current.pause();
            } else {
              audioRef.current.play(); 
            }
            
            setIsPlaying(!isPlaying);
          }}
        >
          {
            isPlaying ? (
              <Pause />
            ) : (
              <Play />
            )
          }
          <VisuallyHidden>
            Toggle playing
          </VisuallyHidden>
        </button>
        
        <audio ref={audioRef} src={src} />
      </div>
    </div>
  );
}

export default MediaPlayer;