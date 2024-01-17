import React from 'react';
function App() {
  const [colors, setColors] = React.useState([
    '#FFD500',
    '#FF0040',
  ]);
  
  const colorStops = colors.join(', ');
  const backgroundImage = `linear-gradient(${colorStops})`;

  const handleOnRemove = () => {
    if (colors.length <= 2) {
      window.alert('There is a minimum of 2 colors');
      return;
    }
    const newColors = [...colors];
    newColors.pop();
    setColors(newColors);
  }

  const handleOnAdd = () => {
    if (colors.length >= 5) {
      window.alert('There is a maximum of 5 colors');
      return;
    }
    const newColors = [...colors];
    newColors.push('#FF0000');
    setColors(newColors);
  }

  const handleOnChange = (event, index) => {
    const newColors = [...colors];
    newColors[index] = event.target.value;
    setColors(newColors);
  }

  return (
    <div className="wrapper">
      <div className="actions">
        <button onClick={handleOnRemove}>
          Remove color
        </button>
        <button onClick={handleOnAdd}>
          Add color
        </button>
      </div>
      
      <div
        className="gradient-preview"
        style={{
          backgroundImage,
        }}
      />
      
      <div className="colors">
        {colors.map((color, index) => {
          const colorId = `color-${index}`;
          return (
            <div key={colorId} className="color-wrapper">
              <label htmlFor={colorId}>
                Color {index + 1}:
              </label>
              <div className="input-wrapper">
                <input
                  id={colorId}
                  type="color"
                  value={colors[index]}
                  onChange={(event) => handleOnChange(event, index)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;