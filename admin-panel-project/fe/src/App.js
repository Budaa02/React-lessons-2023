import { Routes, Route } from "react-router-dom";
import "./App.css";
import UsersTable from "./components/UserTable";
import PersistentDrawerLeft from "./pages/Product";
import Users from "./pages/Users";

function App() {
  console.log(0 % 2);
  return (
    <div className="App">
      <h1>Admin Panel Project</h1>
      <Routes>
        {/* <Route
          path="/users"
          element={<Users />}
        /> */}
      </Routes>
      <PersistentDrawerLeft />
    </div>
  );
}

export default App;
