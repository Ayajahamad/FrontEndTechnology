import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './components/Menu';
import Operation from './components/Operation';
import Add from "./components/Add";
import Sub from "./components/Sub";
import Mul from "./components/Mul";
import Div from './components/Div';

function App() {
 
  return (
    <BrowserRouter>
      <Menu />

        <Routes>
            <Route path={'/'} element={<Operation />}/>
            <Route path={'/add'} element={<Add />}/>
            <Route path={'/sub'} element={<Sub />}/>
            <Route path={'/mul'} element={<Mul />}/>
            <Route path={'/div'} element={<Div />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
