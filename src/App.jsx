import { useState,useEffect } from 'react';
import './App.css';
import Index from './Pages/Index';
import Results from './Pages/Results';
import '../public/css/all.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import {Route,Routes} from 'react-router-dom';
import axios from '../node_modules/axios';


function App() {


  return (
    <>
    <Routes>
    <Route path='/' element={<Index />} />
      <Route path='/results' element={<Results />} />
    </Routes>
    </>
  )
}

export default App
