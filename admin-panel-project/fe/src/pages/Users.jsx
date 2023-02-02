import { Link } from "react-router-dom";
import UsersTable from "../components/UserTable";

export default function Users() {
  return (
    <div>
      <h2>Users Page</h2>
      <Link to="/new">
        <button>New</button>
      </Link>

      <UsersTable />
    </div>
  );
}
