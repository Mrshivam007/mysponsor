import React from 'react';
import ImageViewer from './PanoramicView';

function Panoramic() {
  const imageUrl = 'https://example.com/path/to/your/image.jpg'; // Replace with your image URL

  return (
    <div className="App">
      <ImageViewer imageUrl={imageUrl} />
    </div>
  );
}

export default Panoramic;
