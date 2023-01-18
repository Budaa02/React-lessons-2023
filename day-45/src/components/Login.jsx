import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    loginName: "tbudaa2@gmail.com",
    password: "123456",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.username.value);
    console.log(e.target.password.value);
    if (
      user.loginName === e.target.username.value &&
      user.password === e.target.password.value
    ) {
      toast("user is premitted");
      navigate("/", { replace: true, state: { bookName: "Fake Title" } });
    } else {
      toast("user is not permitted");
      navigate("/register", {
        replace: true,
        state: { bookName: "Fake Title" },
      });
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="username">Login name: </label>
        <input
          name="username"
          type="email"
        />{" "}
        <br />
        <label htmlFor="password">Password: </label>
        <input
          name="password"
          type="password"
        />{" "}
        <br />
        <button>Sign in</button>
      </form>
      <ToastContainer />
    </div>
  );
}
