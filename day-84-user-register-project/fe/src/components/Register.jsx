import { useState, useEffect } from "react";

export default function Register() {
  const ROLE_URL = "http://localhost:8080/adminApi/role/list";
  const REGISTER_URL = "http://localhost:8080/adminApi/register";

  const initialFormData = Object.freeze({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
    userrole: 0,
    address: "",
  });
  const [roles, setRoles] = useState([]);
  const [formData, setFormData] = useState(initialFormData);
  useEffect(() => {
    fetchRoles();
  }, [formData]);
  const fetchRoles = async () => {
    const FETCHED_DATA = await fetch(ROLE_URL);
    console.log(FETCHED_DATA);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON);

    setRoles(FETCHED_JSON.data);
  };

  const handleChange = (e) => {
    // console.log(e.target.id);
    // let option_id = 0;
    // if (select) {
    //   const index = e.target.selectedIndex;

    //   const el = e.target.childNodes[index];
    //   option_id = el.getAttribute("id");
    // }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(e.target);
    // const dataForm = new FormData(e.target);
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };

    const FETCHED_DATA = await fetch(REGISTER_URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON);
  };
  return (
    <div>
      <h1>Register</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "Center",
          alignItems: "center",
        }}
      >
        <label htmlFor="firstname">
          {""}
          First Name:
          <input
            name="firstname"
            type="text"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="lastname">
          {""}
          Last Name:
          <input
            name="lastname"
            type="text"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="email">
          {""}
          Email:
          <input
            name="email"
            type="email"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          {""}
          Password:
          <input
            name="password"
            type="password"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="phone">
          {""}
          Phone:
          <input
            name="phone"
            type="number"
            onChange={handleChange}
          />
        </label>
        <label>
          Roles:
          <select
            name="userrole"
            onChange={handleChange}
          >
            {roles &&
              roles.map((role, index) => (
                <option
                  id={role._id}
                  key={index}
                  value={role._id}
                >
                  {role.name}
                </option>
              ))}
          </select>
        </label>
        <label htmlFor="address">
          Address:
          <textarea
            name="address"
            id=""
            cols="30"
            rows="10"
            onChange={handleChange}
          ></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
