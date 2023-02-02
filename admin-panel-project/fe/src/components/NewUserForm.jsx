import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useState } from "react";

function NewUserForm() {
  const [users, setUsers] = useState([]);
  async function handleSubmit(e) {
    e.preventdefault();
    const postData = {
      username: e.target.username.value,
      age: e.target.age.value,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    };

    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();

    setUsers(FETCHED_JSON.data);
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Add Users</Form.Label>
        <Form.Control
          type="email"
          placeholder="First Name"
        />
        <Form.Control
          type="text"
          placeholder="Last Name"
        />
        <Form.Control
          type="text"
          placeholder="Phone Number"
        />
        <Form.Control
          type="text"
          placeholder="E-Mail"
        />
      </Form.Group>

      <Form.Group
        className="mb-3"
        controlId="formBasicCheckbox"
      >
        <Form.Label>Role</Form.Label>
        <Form.Check
          type="checkbox"
          label="admin"
        />
        <Form.Check
          type="checkbox"
          label="user"
        />
        <Form.Label>Disabled</Form.Label>
        <Form.Check
          type="checkbox"
          label="disabled"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Avatar</Form.Label>
        <br></br>
        <Button>UPLOAD AN IMAGE</Button>
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="password"
          placeholder="Password"
        />
      </Form.Group>
      <Form.Group className="p-2">
        <Button
          variant="primary"
          type="submit"
        >
          SAVE
        </Button>
        <Button
          variant="primary"
          type="submit"
        >
          RESET
        </Button>
        <Link to="/users">
          <Button
            variant="primary"
            type="submit"
          >
            CANCEL
          </Button>
        </Link>
      </Form.Group>
    </Form>
  );
}

export default NewUserForm;
