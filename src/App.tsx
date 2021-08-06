import React from 'react';
import './scss/app.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Main from './pages/Main/Main';

function App() {
  return (
    <div className="App">
      
          <Header/>
          <Navbar/>
          {/* <Main/> */}
      
    </div>
  );
}

export default App;


