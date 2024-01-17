import React from 'react';

import styles from './StickerPad.module.css';
import { getSticker } from './Stickers.data';

function StickerPad() {
  const [stickers, setStickers] = React.useState(
    []
  );

  function addSticker(event) {
    const stickerData = getSticker();
    const newSticker = {
      ...stickerData,
      x: event.clientX,
      y: event.clientY,
    };

    const nextStickers = [...stickers, newSticker];
    setStickers(nextStickers);
  }

  // This method removes the sticker at the specified
  // index. Since we're not allowed to mutate arrays
  // that are held in state, we create a copy of the
  // array using the spread syntax (...), and then use
  // the `splice` method to remove the sticker:
  function deleteSticker(index) {
    const nextStickers = [...stickers];
    nextStickers.splice(index, 1);
    setStickers(nextStickers);
  }

  return (
    <>
      <button
        className={styles.addStickerBtn}
        onClick={addSticker}
      />
      {stickers.map((sticker, index) => (
        <button
          key={index}
          className={styles.sticker}
          onClick={addSticker}
          // `onContextMenu` is how we listen for
          // right-click events. This is part of the
          // DOM, not a React-specific thing.
          onContextMenu={(event) => {
            event.preventDefault();
            deleteSticker(index);
          }}
          // In order to support folks who don't use
          // a pointer device, and therefore can't
          // right-click, let's also allow users to
          // delete stickers by focusing them and
          // pressing the “Delete” key.
          onKeyDown={(event) => {
            if (
              event.key === 'Delete' ||
              event.key === 'Backspace'
            ) {
              deleteSticker(index)
            }
          }}
          style={{
            left: sticker.x,
            top: sticker.y,
            width: sticker.width,
            height: sticker.height,
          }}
        >
          <img
            src={sticker.src}
            alt={sticker.alt}
          />
        </button>
      ))}
    </>
  );
}

export default StickerPad;