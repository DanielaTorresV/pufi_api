import PufiDescription from "./reusables/PufiDescription";
import ButtonShop from "./reusables/ButtonShop";

const DescriptionSection = () => {
  return (
    <div className="containerDescriptionSection">
      <div className="descriptionSection-rain">
        <div className="containerPufiImgButton-rain">
          <div className="pufiImgButton-rain">
            <ButtonShop />
          </div>
        </div>
        <PufiDescription
          img={
            "https://res.cloudinary.com/dannytorres/image/upload/v1661212946/Pufi/jhgt8rp0ow5lanvkdt07.png"
          }
          title={"Pufi RAIN"}
        />
      </div>
      <div className="descriptionSection-puff">
        <PufiDescription
          img={
            "https://res.cloudinary.com/dannytorres/image/upload/v1661212889/Pufi/suiain53b1uqwwxgbnnp.png"
          }
          title={"Pufi PUFF"}
        />
        <div className="containerPufiImgButton-puff">
          <div className="pufiImgButton-puff">
            <ButtonShop />
          </div>
        </div>
      </div>
      <div className="descriptionSection-cart">
        <div className="containerPufiImgButton-cart">
          <div className="pufiImgButton-cart">
            <ButtonShop />
          </div>
        </div>
        <PufiDescription
          img={
            "https://res.cloudinary.com/dannytorres/image/upload/v1661212814/Pufi/yhrxdns1umbhbyy9obxy.png"
          }
          title={"Pufi CART"}
        />
      </div>
      <div className="descriptionSection-nap">
        <PufiDescription
          img={
            "https://res.cloudinary.com/dannytorres/image/upload/v1661266602/Pufi/ggbcrmc7br554msmgn17.png"
          }
          title={"Pufi NAP"}
        />
        <div className="containerPufiImgButton-nap">
          <div className="pufiImgButton-nap">
            <ButtonShop />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionSection;
