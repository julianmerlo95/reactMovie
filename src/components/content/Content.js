import React from 'react';
import Movies from '../movies/Movies';
import Navbar from '../navbar/Navbar';
import Series from '../series/Series';

function Content() {
  return (
    <>
      <Navbar/>
      <Series/>
      <Movies/>
    </>
  )
}

export default Content
