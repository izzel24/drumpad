import { useEffect } from 'react';
import './App.css';

function App() {

  useEffect(() => {
    const handleKey = (event) => {
      const key = event.key.toUpperCase();
      click(key);
    };

    document.addEventListener("keydown", handleKey);

  }, []);

  function click(value) {
    const audio = document.getElementById(value);
    const display = document.getElementById('display');

    if (audio) {
      audio.currentTime = 0;
      audio.play();
      display.innerHTML = audio.parentElement.id; 
    }
  }

  const drumPads = [
    { key: "Q", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3", id: "Heater 1" },
    { key: "W", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3", id: "Heater 2" },
    { key: "E", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3", id: "Heater 3" },
    { key: "A", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3", id: "Heater 4" },
    { key: "S", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3", id: "Clap" },
    { key: "D", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3", id: "Open-HH" },
    { key: "Z", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3", id: "Kick-n'-Hat" },
    { key: "X", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3", id: "Kick" },
    { key: "C", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3", id: "Closed-HH" }
  ];

  return (
    <div className='container h-screen flex justify-center items-center'>
      <div className='w-[600px] h-[350px] bg-green-950 rounded-lg shadow-2xl flex justify-evenly items-center p-5' id='drum-machine'>
        <div className='flex flex-wrap gap-4 w-[50%] h-full items-center'>
          {drumPads.map(pad => (
            <div
              key={pad.key}
              id={pad.id}
              className="drum-pad h-16 w-16 bg-black rounded-lg text-white flex justify-center items-center cursor-pointer"
              onClick={() => click(pad.key)}
            >
              <audio className="clip" id={pad.key} src={pad.src}></audio>
              {pad.key}
            </div>
          ))}
        </div>
        <div className='w-[50%] h-full flex items-center justify-center bg-white rounded-lg shadow-lg'>
          <div id='display' className="text-lg font-bold"></div>
        </div>
      </div>
    </div>
  );
}

export default App;