import ImgCarousel from "../reusables/ImgCarousel";
import DescriptionSection from "../DescriptionSection";
import EspufiSection from "../EspufiSection";
import Form from "../Form";

const Body = () => {
  return (
    <body className="body">
      <ImgCarousel />
      <DescriptionSection />
      <EspufiSection />
      <Form />
    </body>
  );
};

export default Body;
