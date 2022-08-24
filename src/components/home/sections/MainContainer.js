import ImgCarousel from "../reusables/ImgCarousel";
import DescriptionSection from "../DescriptionSection";
import EspufiSection from "../EspufiSection";
import Form from "../Form";

const MainContainer = () => {
  return (
    <div className="body">
      <ImgCarousel />
      <DescriptionSection />
      <EspufiSection />
      <Form />
    </div>
  );
};

export default MainContainer;
