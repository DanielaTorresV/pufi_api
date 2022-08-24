import { faQrcode, faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Security = () => {
  return (
    <div className="containerSecurity">
      <p className="textSecurity">COMPRA 100% SEGURA</p>
      <div className="sectionDownSecurity">
        <FontAwesomeIcon icon={faQrcode} className="iconSecurity" />
        <FontAwesomeIcon icon={faShieldHalved} className="iconSecurity" />
        <p className="text2Security">COMPRA CON LA GARANTÍA DE PUFI</p>
      </div>
    </div>
  );
};

export default Security;
