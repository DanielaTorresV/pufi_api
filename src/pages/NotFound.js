import LogoBlack from "../assets/logo-black.png";
import NotFoundImg from "../assets/not_found.jpg";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFound">
      <img
        src={NotFoundImg}
        alt="Error 404"
        className="notFound-img"
        loading="lazy"
      ></img>
      <a href="https://www.freepik.es/vectores/404">
        Vector de 404 creado por pikisuperstar - www.freepik.es
      </a>
      <br />
      <p className="notFound-paragraph">
        <strong>Not Found.</strong> Te invitamos a regresar a nuestra Home Page:
      </p>
      <Link to="/">
        <img
          src={LogoBlack}
          alt="logo"
          className="notFound-logoBlack"
          loading="lazy"
        />
      </Link>
    </div>
  );
};

export default NotFound;
