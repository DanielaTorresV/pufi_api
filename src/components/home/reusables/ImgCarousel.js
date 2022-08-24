import { Carousel } from "@mantine/carousel";
import PhraseSlide from "./PhraseSlide";
import ButtonShop from "./ButtonShop";

const ImgCarousel = () => {
  return (
    <div className="containerCarousel">
      <Carousel withIndicators slideSize="100%" mx="auto" height={500}>
        <Carousel.Slide>
          <div className="imgCarousel-slide1">
            <div className="imgCarousel-containerPhraseButton">
              <PhraseSlide />
              <ButtonShop />
            </div>
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className="imgCarousel-slide2">
            <div className="imgCarousel-containerPhraseButton">
              <PhraseSlide />
              <ButtonShop />
            </div>
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className="imgCarousel-slide3">
            <div className="imgCarousel-containerPhraseButton">
              <PhraseSlide />
              <ButtonShop />
            </div>
          </div>
        </Carousel.Slide>
      </Carousel>
    </div>
  );
};

export default ImgCarousel;
