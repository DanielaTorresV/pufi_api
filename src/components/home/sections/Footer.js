import LogoBlack from "../../../assets/logo-black.png";
import SectionFooter from "../reusables/sectionFooter";
import VerticalDivider from "../reusables/VerticalDivider";
import Security from "../Security";
import SocialMedia from "../SocialMedia";
import CopyRightFooter from "../CopyRightFooter";

const Footer = () => {
  return (
    <footer className="containerFooter">
      <div className="footerUp">
        <img src={LogoBlack} alt="Logo" loading="lazy" className="logoFooter" />
        <SectionFooter
          text1={"PUFI RAIN"}
          text2={"PUFI PUFF"}
          text3={"PUFI CART"}
          text4={"PUFI NAP"}
        />
        <VerticalDivider styleName={"verticalDivider-gray"} />
        <SectionFooter
          text1={"CONTACTO"}
          text2={"AYUDA"}
          text3={"CÓMO COMPRAR"}
          text4={"TÉRMINOS & CONDICIONES"}
        />
        <VerticalDivider styleName={"verticalDivider-gray"} />
        <Security />
        <VerticalDivider styleName={"verticalDivider-gray"} />
        <SocialMedia />
      </div>
      <div className="footerDown">
        <CopyRightFooter />
      </div>
    </footer>
  );
};

export default Footer;
