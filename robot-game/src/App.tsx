import React from 'react';

import { Board } from './Components/Board';
import { Initial } from './Components/Initial';
import { Route, Routes } from "react-router-dom";
function App() {
  return (

    <Routes>
      <Route path="/" element={<Initial />} />
      <Route path="/board" element={<Board />} />
    </Routes>

  );
}

export default App;


