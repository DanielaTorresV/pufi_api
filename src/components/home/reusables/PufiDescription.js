import ButtonMore from "./ButtonMore";
import HorizontalDivider from "./HorizontalDivider";

const PufiDescription = ({ img, title }) => {
  return (
    <div className="containerPufiDescription">
      <img
        src={img}
        alt="Description"
        loading="lazy"
        className="PufiDescription-img"
      />
      <h6 className="PufiDescription-title">{title}</h6>
      <HorizontalDivider />
      <p className="PufiDescription-description">
        Descripción del producto. Este es un texto simulado.
      </p>
      <ButtonMore />
    </div>
  );
};

export default PufiDescription;
