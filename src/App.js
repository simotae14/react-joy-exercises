import React from 'react';

import MediaPlayer from './MediaPlayer'

const DEMO_SONG_SRC = 'https://storage.googleapis.com/joshwcomeau/bvrnout-take-it-easy-short.mp3';

function App() {
  const [
    showMediaPlayer,
    setShowMediaPlayer
  ] = React.useState(true);
  
  return (
    <>
      <button
        onClick={() => setShowMediaPlayer(!showMediaPlayer)}
      >
        Toggle media player
      </button>
      {showMediaPlayer && <MediaPlayer src={DEMO_SONG_SRC} />}
    </>
  );
}

export default App;