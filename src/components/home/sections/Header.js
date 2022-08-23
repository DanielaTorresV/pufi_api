import NavHeader from "../NavHeader";
import LogoPufi from "../../../assets/logo-white.png";

const Header = () => {
  return (
    <header className="header">
      <img className="logoHeader" src={LogoPufi} alt="logo" loading="lazy" />
      <NavHeader />
    </header>
  );
};

export default Header;
