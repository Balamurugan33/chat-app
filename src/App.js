import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Login from './components/login';
import Loader from './components/loader'
import Header from './components/header';
import Home from './containers/home';
import './App.scss';

function App() {
  const loading = useSelector(
    (state) => state.chat.loading
  );
  const user = useSelector(
    (state) => state.chat.user
  );
  
  return (
    <Router>
      <div className='app'>
        {loading && <Loader />}
        {user && <Header />}
        <Routes>
          <Route path={'/'} element={<Login />} />
          <Route path={'home'} element={<Home />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
