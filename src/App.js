/**
 * 
 *  Created at: 2021-11-10
 *  Creator: Viktor Ferenczi
 *  Copyright https://github.com/viktorferenczi
 * 
 */
import React from 'react';


// Routing - Router
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Routing - Pages
import { ContactPage } from './pages/ContactPage';
import { FleetPage } from './pages/FleetPage';
import { MainLandingPage } from './pages/MainLandingPage';
import { VehiclePage } from './pages/VehiclePage';
import { BookingPage } from './pages/BookingPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MainLandingPage/>}/>
          <Route exact path="/fleet" element={<FleetPage/>}/>
          <Route exact path="/vehicle" element={<VehiclePage/>}/>
          <Route exact path="/contact" element={<ContactPage/>}/>
          <Route exact path="/booking" element={<BookingPage/>}/>
          <Route path='*' element={<MainLandingPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
