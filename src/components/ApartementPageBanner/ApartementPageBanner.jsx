import React, { useState } from 'react';
import './ApartementPageBanner.css';

function ApartementPageBanner(props) {
  const [currentPicture, setCurrentPicture] = useState(0);

  const getClassName = (i) => {
    return i === currentPicture ? 'show' : '';
  };

  const picture = props.imageUrl.map((foto, i) => (
    <div key={i}>
      <img src={foto} alt="" className={getClassName(i)} />
    </div>
  ));

  const moveToNext = () => {
    setCurrentPicture((currentPicture + 1) % picture.length);
  };

  const moveToPreview = () => {
    setCurrentPicture((currentPicture - 1 + picture.length) % picture.length);
  };

  if (currentPicture === -1) {
    setCurrentPicture(0);
  }

  return (
    <div className="photo">
      <div className="fotos">{picture}</div>

      {props.imageUrl.length > 1 && (
        <div className="right" onClick={moveToNext}>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      )}

      {props.imageUrl.length > 1 && (
        <div className="left" onClick={moveToPreview}>
          <i className="fa-solid fa-chevron-left"></i>
        </div>
      )}

      <div className="counter">
        <span>
          {currentPicture + 1} / {picture.length}
        </span>
      </div>
    </div>
  );
}

export default ApartementPageBanner;
