import React from 'react';

function App() {
  const [colors, setColors] = React.useState([
    '#FFD500',
    '#FF0040',
  ]);
  
  const colorStops = colors.join(', ');
  const backgroundImage = `linear-gradient(${colorStops})`;
  
  return (
    <>
      <div
        className="gradient-preview"
        style={{
          backgroundImage,
        }}
      />
      
      <form>
        {colors.map((color, index) => {
          const colorId = `color-${index}`;
          
          return (
            <div key={colorId} className="color-row">
              <label htmlFor={colorId}>
                Color {index + 1}:
              </label>
              <input
                id={colorId}
                type="color"
                value={color}
                onChange={event => {
                  // fix the mutation bug
                  const nextColors = [...colors];
                  nextColors[index] = event.target.value;
                  
                  setColors(nextColors);
                }}
              />
            </div>
          );
        })}
      </form>
    </>
  );
}

export default App;