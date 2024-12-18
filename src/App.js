import { Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import './App.css';
import React from 'react';
import { AmbientLight } from 'three';
import { Ground } from './components/Ground';


function App() {
  return (
    <div className='App'>
      <div className='App-header'>
        <p className='App-header-text'>Web Minecraft</p>
      </div>
      <div className='canvas-div'>
        <div className='canvas'>
          <Canvas>
            <Sky sunPosition={[100, 100, 20]}></Sky>
            <AmbientLight intensity={0.5}></AmbientLight>
            <Physics>
              <Ground></Ground>
            </Physics>
          </Canvas>
        </div>
      </div>
    </div>
  );
}

export default App;
