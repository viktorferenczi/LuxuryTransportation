import React, { useState, useCallback , useEffect} from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { chevroletPhotoes, mercedesBasicPhotoes, mercedesExecPhotoes, cadillacPhotoes } from "../VehiclePage/photo";

export const PhotoGallery = (props) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState(null);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  const handleResize = () => {
    setWindowDimensions(getWindowDimensions());
  }

  const getWindowDimensions = () => {
    return window.innerWidth;
  }

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  let chosenCarPhotoes = null;

  switch (props.displayedCar.id) {
    case 1:
        //Chevrolet Suburban
        chosenCarPhotoes = chevroletPhotoes;
        break;
    case 2:
        //Mercedes basic
        chosenCarPhotoes = mercedesBasicPhotoes;
        break;
    case 3:
        //Mercedes exec basic
        chosenCarPhotoes = mercedesExecPhotoes;
        break; 
    case 4:
        //Cadillac
        chosenCarPhotoes = cadillacPhotoes;
        break; 
      default:
          break;
  }
  
  return (
    <div>
          {window.innerWidth < 1100 ?  // ez a width, itt állítható, hogy mikortól legyen 1 kép csak
              <img onClick={(event) => openLightbox(event, { photo: 0, index: 0 })} className="main-car-img" src={chosenCarPhotoes[0].src}></img>
      :
        <div style={{width:"50rem"}}> <Gallery photos={chosenCarPhotoes} onClick={openLightbox}/></div>
      }

      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={chosenCarPhotoes.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}