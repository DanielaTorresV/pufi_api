import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const RightHeader = () => {
  return (
    <div className="containerRightHeader">
      <div className="rightHeader-account">
        <p>MI CUENTA</p>
        <FontAwesomeIcon icon={faAngleDown} className="rightHeader-icon" />
      </div>
      <div className="rightHeader-divider" />
      <p>MI COMPRA</p>
    </div>
  );
};

export default RightHeader;
