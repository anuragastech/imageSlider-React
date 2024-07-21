import React, { useState, useEffect } from "react";

const ImageSlider = ({ url, limit }) => {
  const [images, setImages] = useState([]);
  // const [currentSlider, setCurrentSlider] = useState(0);
  const [errorMsg, setErroMsg] = useState([null]);
  const [loading, setLoading] = useState(false);
  const fetchImages = async (getUrl) => {
    try {
      const response = await fetch(getUrl);
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
        setErroMsg (e.message);
      setLoading(false);

    }
  };
  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url, limit]);

  if (loading) {
    return <div>Loading data! Please wait...</div>;
  }

  if (errorMsg !== null) {
    return <div>Error occurred! {errorMsg}</div>;
  }


  return 
  <div className="ccontainer"></div>;
};

export default ImageSlider;
