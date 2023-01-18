import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Header from "./Header";

export default function Register() {
  //   const navigate = useNavigate();
  const [formSubmitted, setFormSubmitted] = useState(false);
  //   const [user, setUser] = useState({});

  if (formSubmitted) {
    return <Navigate to={"/login"} />;
  }

  const handleSubmit = function (event) {
    event.preventDefault();
    // navigate("/", )
    setFormSubmitted(true);
  };
  return (
    <div>
      <h1>Register Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Register Email: </label>
        <input
          type="email"
          name="email"
        />
        <br />
        <label htmlFor="username">Register Username: </label>
        <input
          type="username"
          name="username"
        />
        <br />
        <label htmlFor="password">Register Password: </label>
        <input
          type="password"
          name="password"
        />
        <br />
        <label htmlFor="number">Register Phone number: </label>
        <input
          type="number"
          name="phone_number"
        />
        <br />
        <button>Register now</button>
      </form>
    </div>
  );
}
