import React from 'react';

import styles from './StickerPad.module.css';
import { getSticker } from './Stickers.data';

function StickerPad() {
  const [stickers, setStickers] = React.useState([]);

  return (
    <button
      className={styles.wrapper}
      onClick={(event) => {
        const stickerData = getSticker();
        const newSticker = {
          ...stickerData,
          x: event.clientX,
          y: event.clientY,
          // id: Math.random()
          id: crypto.randomUUID()
        };

        const nextStickers = [...stickers, newSticker];
        setStickers(nextStickers);
      }}
    >
      {stickers.map((sticker) => (
        <img
          key={sticker.id}
          className={styles.sticker}
          src={sticker.src}
          alt={sticker.alt}
          style={{
            left: sticker.x,
            top: sticker.y,
            width: sticker.width,
            height: sticker.height,
          }}
        />
      ))}
    </button>
  );
}

export default StickerPad;