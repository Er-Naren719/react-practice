import { useState } from 'react';

const availableColors = [
  {
    name: "red",
    textColor: "white"
  },
  {
    name: "green",
    textColor: "white"
  },
  {
    name: "blue",
    textColor: "white"
  },
  {
    name: "olive",
    textColor: "white"
  },
  {
    name: "grey",
    textColor: "white"
  },
  {
    name: "yellow",
    textColor: "black"
  },
  {
    name: "pink",
    textColor: "black"
  },
  {
    name: "purple",
    textColor: "white"
  },
  {
    name: "lavender",
    textColor: "black"
  },
  {
    name: "white",
    textColor: "black"
  },
  {
    name: "black",
    textColor: "white"
  }
];
function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className='w-full h-screen'
      style={{ backgroundColor: color }}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-lg bg-gray-200'>
          {/* <button
            className='outline-none text-white font-bold py-2 px-4 rounded-full shadow-lg cursor-pointer'
            style={{ backgroundColor: 'red' }}
            onClick={() => setColor('red')}
          >
            Red
          </button> */}
          {availableColors.map((color) => (
            <button
              key={color.name}
              className='outline-none font-bold py-2 px-4 rounded-full shadow-lg cursor-pointer'
              style={{ backgroundColor: color.name, color: color.textColor }}
              onClick={() => setColor(color.name)}
            >
              {color.name.charAt(0).toUpperCase() + color.name.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
