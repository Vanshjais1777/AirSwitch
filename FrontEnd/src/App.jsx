import React from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Ac from './pages/Ac';
import Tv from './pages/Tv';
import Fan from './pages/Fan';
import Camera from './pages/Camera';
import WaterCooler from './pages/WaterCooler';
import Projector from './pages/Projector';
import SolarPanel from './pages/SolarPanel';
import Generator from './pages/Generator';
import Bulb from './pages/Bulb';
import SIgnUp from './pages/SIgnUp';
import Login from './pages/Login';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/ac' element={<Ac />}></Route>
          <Route path='/tv' element={<Tv />}></Route>
          <Route path='/fan' element={<Fan />}></Route>
          <Route path='/camera' element={<Camera />}></Route>
          <Route path='/wcooler' element={<WaterCooler />}></Route>
          <Route path='/projector' element={<Projector />}></Route>
          <Route path='/solar' element={<SolarPanel />}></Route>
          <Route path='/generator' element={<Generator />}></Route>
          <Route path='/bulb' element={<Bulb />}></Route>
          <Route path='/signup' element={<SIgnUp />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;