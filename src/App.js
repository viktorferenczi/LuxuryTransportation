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
import { PricesPage } from './pages/PricesPage';
import { VehiclePage } from './pages/VehiclePage';
import { BookingPage } from './pages/BookingPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLandingPage/>}/>
          <Route path="/fleet" element={<FleetPage/>}/>
          <Route path="/prices" element={<PricesPage/>}/>
          <Route path="/vehicle" element={<VehiclePage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/booking" element={<BookingPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
