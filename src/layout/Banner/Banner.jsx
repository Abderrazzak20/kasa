import React from 'react';
import './Banner.css';

function Banner(props) {
  
  return (
    <div className='banner'>
      <h1>{props.title}</h1>
    </div>
  );
}

export default Banner;