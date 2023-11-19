import React from 'react';
import './App.css';
import { Board } from './Components/Board';
import { Initial } from './Components/Initial';
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Initial />} />
        <Route path="/board" element={<Board />} />
      </Routes>
    </div>
  );
}

export default App;


