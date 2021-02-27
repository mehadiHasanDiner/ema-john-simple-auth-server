import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
// import fakeData from './data/data.json'


function App() {


  return (
    <div>
      <Header></Header>
      <Shop></Shop>
    </div>
  );
}


export default App;
