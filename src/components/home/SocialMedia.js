import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const SocialMedia = () => {
  return (
    <div className="containerSocialMedia">
      <p className="text">SEGUINOS EN</p>
      <FontAwesomeIcon icon={faFacebookF} className="iconSocialMedia" />
      <FontAwesomeIcon icon={faTwitter} className="iconSocialMedia" />
      <FontAwesomeIcon icon={faInstagram} className="iconSocialMedia" />
    </div>
  );
};

export default SocialMedia;
