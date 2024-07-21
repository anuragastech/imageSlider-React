import React, { useState, useEffect } from "react";

const ImageSlider = ({ url, limit }) => {
  const [images, setImages] = useState([]);
  const [currentSlider, setCurrentSlider] = useState(0);
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
  }, [url]);

  if(loading){
    return <div>Lo1ading data !please wait</div>
  }

  if(errorMsg !== null){
    return <div>Error occured ! {errorMsg}</div>
  }

  return <div className="ccontainer"></div>;
};
