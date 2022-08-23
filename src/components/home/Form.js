import { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleSubmit = () => {
    console.log(email);
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
