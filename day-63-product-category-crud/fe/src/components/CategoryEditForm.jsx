import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

import { useParams } from "react-router-dom";

export default function CategoryEditForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const URL = "http://localhost:8080/category";
  console.log(id);

  const [category, setCategory] = useState({
    name: "Test",
  });

  async function fetchCategory() {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        categoryId: id,
      }),
    };
    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    if (FETCHED_JSON.status === "success") {
      setCategory(FETCHED_JSON.data);
    }
  }

  useEffect(() => {
    fetchCategory();
  }, []);
  function handleInputChange(e) {
    setCategory(e.target.value);
  }

  // const URL = "http://localhost:8080/"
  async function handleEditSubmit(e) {
    e.preventDefault();
    console.log(e.target.categoryName.value);
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        categoryId: id,
        categoryName: e.target.categoryName.value,
        isEdit: true,
      }),
    };

    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    if (FETCHED_JSON.status === "success") {
      navigate("/category/list");
    }
  }
  return (
    <div>
      <h1>Category Edit Form</h1>
      <form onSubmit={handleEditSubmit}>
        <input
          name="categoryName"
          value={category.name}
          onChange={handleInputChange}
        />
        <button>Edit Save</button>
      </form>
    </div>
  );
}
