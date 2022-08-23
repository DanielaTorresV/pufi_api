import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCouch,
  faUmbrella,
  faBagShopping,
  faMattressPillow,
} from "@fortawesome/free-solid-svg-icons";
import PufiIconHeader from "./reusables/PufiIconHeader";
import VerticalDivider from "./reusables/VerticalDivider";

const NavHeader = () => {
  return (
    <div className="NavHeader">
      <PufiIconHeader icon={faCouch} name={"PUFI PUFF"} />
      <VerticalDivider styleName={"verticalDivider-white"} />
      <PufiIconHeader icon={faUmbrella} name={"PUFI RAIN"} />
      <VerticalDivider styleName={"verticalDivider-white"} />
      <PufiIconHeader icon={faBagShopping} name={"PUFI CART"} />
      <VerticalDivider styleName={"verticalDivider-white"} />
      <PufiIconHeader icon={faMattressPillow} name={"PUFI NAP"} />
    </div>
  );
};

export default NavHeader;
