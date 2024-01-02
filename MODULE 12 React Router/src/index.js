import React from 'react';
import ReactDOM from 'react-dom/client';
import {  Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Lazy_loader = React.lazy(()=>import('./Lazy_loader')) ;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route  path='/' element={<><Suspense fallback = { <div className="spinner-border text-center" />}><Lazy_loader/> </Suspense></>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

