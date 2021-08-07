import React from 'react';
import './scss/app.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Main from './pages/Main/Main';
import Search from './components/Search/Search';
import Address from './pages/Address/Address';
import { Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      
          <Header/>
          <div className='container'>
          <Navbar/>
          <main className='content'>
            <Route exact path='/'>
              <Main/>
            </Route>
            <Route exact path='/address'>
              <Address/>
            </Route>
            
          </main>
          </div>

          {/* <Main/> */}
      
    </div>
  );
}

export default App;


