// Studio.jsx
import React from 'react';
import "./Studio.css";
import { Link } from 'react-router-dom';

function Studio(props) {
  return (
    <Link to={`/flat/${props.id}`} >
      <div className='studio'> 
        <div className="image"><img src={props.imageUrl} alt="" /></div>
        <div className="title">{props.title}</div>
      </div>
    </Link>
  )
}

export default Studio;
