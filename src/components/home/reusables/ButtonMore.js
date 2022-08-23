import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const ButtonMore = () => {
  return (
    <div className="containerButtonMore">
      <FontAwesomeIcon icon={faAngleRight} className="iconButtonMore" />
      <p className="textButtonMore">VER MÁS</p>
    </div>
  );
};

export default ButtonMore;
