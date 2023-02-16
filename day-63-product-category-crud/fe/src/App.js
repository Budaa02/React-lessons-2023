import { Route, Routes } from "react-router-dom";
import "./App.css";
import CategoryEditForm from "./components/CategoryEditForm";
import CategoryForm from "./components/CategoryForm";
import Categories from "./components/Categories";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div className="App">
      <h1>day-63 - Category CRUD</h1>
      <Routes>
        <Route
          path="/category/add"
          element={<CategoryForm />}
        />
        <Route
          path="/category/list"
          element={<Categories />}
        />
        <Route
          path="/category/edit/:id"
          element={<CategoryEditForm />}
        />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
