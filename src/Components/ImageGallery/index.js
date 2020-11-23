import React, {useState} from 'react'
// CSS
import './index.css'
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const ImageGallery = ({ images }) => { 

    const [imageIndex, setImageIndex] = useState(1); 

    const previousImage = () => {
        (imageIndex === 0) ? 
          setImageIndex(images.length - 5):setImageIndex(prevWord => prevWord - 1);
    }

    const nextImage = () => {
      (imageIndex === images.length - 5) ? 
          setImageIndex(0):setImageIndex(prevWord => prevWord + 1);
    }


    const displayedImages = (
      <div>
        <img src={images[imageIndex]} alt="this-pic" className="carousel-image" />
        <img src={images[imageIndex + 1]} alt="this-pic" className="carousel-image" />
        <img src={images[imageIndex + 2]} alt="this-pic" className="carousel-image" />
        <img src={images[imageIndex + 3]} alt="this-pic" className="carousel-image" />
        <img src={images[imageIndex + 4]} alt="this-pic" className="carousel-image" />
      </div>
    )
  
    return (
        <div className="gallery-container">
          <h1>Images</h1>
          <img src={images[imageIndex]} alt="" className="current-image"/>
          <div className="gallery-images">
          <FontAwesomeIcon icon={faAngleDoubleLeft}
              size="2x" 
              onClick={previousImage} 
              className="toggle-button" /> 
            {displayedImages}
            <FontAwesomeIcon icon={faAngleDoubleRight}
              size="2x" 
              onClick={nextImage} 
              className="toggle-button" /> 
          </div>
        </div>
    );
    
  };
  
  export default ImageGallery