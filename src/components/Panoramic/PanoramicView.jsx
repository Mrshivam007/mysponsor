import React from 'react';
import React360View from 'react-360-view';

const My360Viewer = () => {
  const imageUrl = 'https://example.com/path/to/your/image.jpg'; // Replace with your image URL

  return (
    <div>
      <h2>360-Degree Image Viewer</h2>
      <React360View src={imageUrl} width={600} height={400} />
    </div>
  );
};

export default My360Viewer;