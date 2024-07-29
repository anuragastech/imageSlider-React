import React, { useState, useEffect } from "react";
import './style.css';

const ImageSlider = ({ url, limit }) => {
  const [images, setImages] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchImages = async (getUrl) => {
    setLoading(true);
    try {
      const response = await fetch(getUrl);
      const data = await response.json();
      if (data) {
        setImages(data.slice(0, limit)); // Apply limit to the images if provided
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  if (loading) {
    return <div>Loading data! Please wait...</div>;
  }

  if (errorMsg !== null) {
    return <div>Error occurred! {errorMsg}</div>;
  }

  return (
    <div className="container">
      {images && images.length ? (
        images.map((imageItem) => (
          <img
            key={imageItem.id}
            alt={imageItem.author}
            src={imageItem.download_url}
          />
        ))

        
      ) : (
        <div>No images found</div>
      )}
    </div>
  );
};

export default ImageSlider;


