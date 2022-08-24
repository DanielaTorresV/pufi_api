import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/reducers/User.reducer";

const Form = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleSubmit = () => {
    const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (regex.test(email)) {
      dispatch(registerUser(email));
    } else {
      alert("El email no es válido, no podrás suscribirte!");
    }
  };

  return (
    <div className="containerForm">
      <div className="textForm">
        <p className="nameForm">NEWSLETTER</p>
        <h4 className="suscriptionForm">SUSCRIBETE</h4>
        <p className="descriptionForm">Y enterate de todas las novedades</p>
      </div>
      <form
        className="form"
        onSubmit={handleSubmit}
        action="https://formspree.io/f/xknegjvg"
        method="POST"
      >
        <input
          value={email}
          onChange={handleChange}
          required
          className="inputForm"
          name="_replyto"
          placeholder="Ingresa tu email"
        />
        <button type="submit" className="loginFormButton">
          Suscribirse
        </button>
        <input type="hidden" name="_subject" value="Website Suscription" />
      </form>
    </div>
  );
};

export default Form;
