import React from 'react'
import '../styles/App.css';
import Search from './search/Search';
import SeatContainer from './seat/SeatContainer';

const App = () => {


  return (
    <div id="main">
    <Search/>
    <SeatContainer/>
    
    </div>
  )
}


export default App;
