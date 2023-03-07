import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

export default function UsersTable() {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },

    { field: "role", headerName: "user_role", width: 130 },
  ];

  const rows = [
    {
      id: 1,

      role: "Admin",
    },
    {
      id: 2,

      role: "Admin",
    },
  ];
  return (
    <div style={{ height: 400, width: "100%" }}>
      <Link to="/user_role_register">
        <button>User role</button>
      </Link>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

// const columns = [
//   { field: "id", headerName: "ID", width: 70 },

//   { field: "role", headerName: "User_role", width: 130 },

// {
//   field: "fullName",
//   headerName: "Full name",
//   description: "This column has a value getter and is not sortable.",
//   sortable: false,
//   width: 160,
//   valueGetter: (params) =>
//     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
// },
// ];

// async function createRole(role) {
//   // const postData = newRole(role);
//   const options = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(postData),
//   };
//   const FETCHED_DATA = await fetch(URL, options);
//   const FETCHED_JSON = await FETCHED_DATA.json();
// }
// const rows = [
//   {
//     id: 1,

//     role: "Admin",
//   },
//   {
//     id: 2,

//     role: "Customer",
//   },
//   {
//     id: 3,

//     role: "User",
//   },
// ];
//   return (
//     <div style={{ height: 400, width: "100%" }}>
//       {/* <DataGrid
//         // rows={rows}
//         columns={columns}
//         pageSize={5}
//         rowsPerPageOptions={[5]}
//         checkboxSelection
//       /> */}
//     </div>
//   );
// }
