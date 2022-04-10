import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Loader from './components/loader';
import Header from './components/header';
import Home from './containers/home';
import ChatWindow from './components/chatWindow';
import './App.scss';

function App() {

  return (
    <Router>
      <div className='app'>
        {false && <Loader />}
        <Header />
        <Routes>
          <Route path={'/'} element={<Home />}>
            <Route path={'chat'} element={<ChatWindow />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
