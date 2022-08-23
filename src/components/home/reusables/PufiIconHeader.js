const PufiIconHeader = (icon, name) => {
  return (
    <div className="containerPufiIconHeader">
      <img
        className="imgPufiIconHeader"
        src={icon}
        alt="icon"
        loading="lazy"
      ></img>
      <p className="namePufiIconHeader">{name}</p>
    </div>
  );
};

export default PufiIconHeader;
