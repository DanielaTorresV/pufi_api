import BrandLive from "../../assets/brandLive.PNG";

const CopyRightFooter = () => {
  return (
    <div className="containerCopyRight">
      <p className="textCopyRight">
        PUFI Copyright 2017 - Todos los derechos reservados
      </p>
      <img
        src={BrandLive}
        alt="Brand"
        loading="lazy"
        className="imgCopyRight"
      />
    </div>
  );
};

export default CopyRightFooter;
