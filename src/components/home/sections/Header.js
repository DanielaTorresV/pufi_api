import NavHeader from "../NavHeader";
import LogoPufi from "../../../assets/logo-white.png";
import RightHeader from "../RightHeader";

const Header = () => {
  return (
    <header className="header">
      <img className="logoHeader" src={LogoPufi} alt="logo" loading="lazy" />
      <NavHeader />
      <RightHeader />
    </header>
  );
};

export default Header;
