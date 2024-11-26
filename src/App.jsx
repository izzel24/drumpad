import { useEffect, useState } from 'react';
import './App.css'

function App() {

  useEffect(() => {
    const handleKey = (event) => {
      const key = event.key.toUpperCase();
      click(key);
    };

    document.addEventListener("keydown", handleKey);
  }, [])


  function click(value){
    const audio = document.getElementById(value);
    const display = document.getElementById('display')

    if(audio){
      audio.currentTime = 0;
      audio.play();
    }

    if(value == "Q"){
      display.innerHTML = "Heater 1";
    } else if(value == "W"){
      display.innerHTML = "Heater 2";
    } else if(value == "E"){
      display.innerHTML = "Heater 3";
    } else if(value == "A"){
      display.innerHTML = "Heater 4";
    } else if(value == "S"){
      display.innerHTML = "Clap";
    } else if(value == "D"){
      display.innerHTML = "Open-HH";
    } else if(value == "Z"){
      display.innerHTML = "Kick-n'-Hat";
    } else if(value == "X"){
      display.innerHTML = "Kick";
    } else if(value == "C"){
      display.innerHTML = "Closed-HH";
    }
    
  }

  return (
    <div className='container h-screen flex justify-center items-center'>
      <div className='w-[600px] h-[350px] bg-green-950 rounded-lg shadow-2xl flex justify-evenly items-center p-5 cursor-pointer' id='drum-machine'>
        <div className='flex flex-wrap gap-x-6 p-2  w-[50%] h-full items-center'>
        <div className="drum-pad h-16 w-16 bg-black rounded-lg text-white flex justify-center items-center " onClick={() => click("Q")}>
          <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3" id='Q'></audio>
          Q
        </div>
        <div className="drum-pad h-16 w-16 bg-black rounded-lg text-white flex justify-center items-center" onClick={() => click("W")}>
          <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3" id='W'></audio>
          W
        </div>
        <div className="drum-pad h-16 w-16 bg-black rounded-lg text-white flex justify-center items-center" onClick={() => click("E")}>
          <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3" id='E'></audio>
          E
        </div>
        <div className="drum-pad h-16 w-16 bg-black rounded-lg text-white flex justify-center items-center" onClick={() => click("A")}>
          <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3" id='A'></audio>
          A
        </div>
        <div className="drum-pad h-16 w-16 bg-black rounded-lg text-white flex justify-center items-center" onClick={() => click("S")}>
          <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3" id='S'></audio>
          S
        </div>
        <div className="drum-pad h-16 w-16 bg-black rounded-lg text-white flex justify-center items-center" onClick={() => click("D")}>
          <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3" id='D'></audio>
          D
        </div>
        <div className="drum-pad h-16 w-16 bg-black rounded-lg text-white flex justify-center items-center" onClick={() => click("Z")}>
          <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3" id='Z'></audio>
          Z
        </div>
        <div className="drum-pad h-16 w-16 bg-black rounded-lg text-white flex justify-center items-center" onClick={() => click("X")}>
          <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3" id='X'></audio>
          X
        </div>
        <div className="drum-pad h-16 w-16 bg-black rounded-lg text-white flex justify-center items-center" onClick={() => click("C")}>
          <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3" id='C'></audio>
          C
        </div>
        </div>
        <div className='w-[50%] h-full flex items-center justify-center bg-white rounded-lg shadow-lg'> 
          <div id='display'></div>
        </div>
        
      </div>
    </div>
  )
}

export default App
