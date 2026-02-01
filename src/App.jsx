import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Dashboard from './pages/Dashboard';
import {Toaster} from 'react-hot-toast';
import RentedCars from './pages/RentedCars';

const App = () => {

  return (
    <div className='bg-[#f4f6f8]'>
      <Toaster />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cars' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='rented-cars' element={<RentedCars />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;