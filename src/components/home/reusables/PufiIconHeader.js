import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PufiIconHeader = ({ icon, name }) => {
  return (
    <div className="containerPufiIconHeader">
      <FontAwesomeIcon icon={icon} className="iconNavHeader" />
      <p className="namePufiIconHeader">{name}</p>
    </div>
  );
};

export default PufiIconHeader;
