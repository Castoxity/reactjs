// src/ImageToggler.js
import React, { useState } from 'react';
import './ImageToggler.css';

function ImageToggler() {
  const [image, setImage] = useState(null);

  const showImage1 = () => {
    setImage('/images/image1.jpg');
  };

  const showImage2 = () => {
    setImage('/images/image2.jpg');
  };

  return (
    <div className="image-toggler">
      <button onClick={showImage1}>Show Image 1</button>
      <button onClick={showImage2}>Show Image 2</button>
      {image && <img src={image} alt="Selected" />}
    </div>
  );
}

export default ImageToggler;
