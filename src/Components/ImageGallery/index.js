import React, {useState} from 'react'
// CSS
import './index.css'
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const ImageGallery = ({ images }) => { 

    const [imageIndex, setImageIndex] = useState(1); 
    const [selectedIndex, setSelectedIndex] = useState(0)

    const previousImage = () => {
        (imageIndex === 0) ? 
          setImageIndex(images.length - 5):setImageIndex(prevWord => prevWord - 1);
    }

    const nextImage = () => {
      (imageIndex === images.length - 5) ? 
          setImageIndex(0):setImageIndex(prevWord => prevWord + 1);
    }

    const galleryTotal = [0,1,2,3,4]

    const displayedImages = galleryTotal.map((item) => {
      
      const indexNumber = imageIndex + item;
      
      return (
          <img src={images[indexNumber]} 
            alt="this-pic" 
            className="carousel-image" 
            onClick={() => setSelectedIndex(indexNumber) }/>
      )

    })
  
    return (
        <div className="gallery-container">
          <img src={images[selectedIndex]} alt="selected" 
            className="current-image" />
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