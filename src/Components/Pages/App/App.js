import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'Styles/app.css';
import Navigation from 'Components/Pages/Navigation';
import SinglePost from 'Components/Pages/SinglePost';
import Home from 'Components/Pages/Home';

function App () {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id/:title" element={<SinglePost />} />
      </Routes>
    </>
  );
}

export default App;
