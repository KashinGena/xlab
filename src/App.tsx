import React from 'react';
import './scss/app.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Main from './pages/Main/Main';
import Search from './components/Search/Search';

function App() {
  return (
    <div className="App">
      
          <Header/>
          <div className='container'>
          <Navbar/>
          <main className='content'>
            <Search/>
          </main>
          </div>

          {/* <Main/> */}
      
    </div>
  );
}

export default App;


