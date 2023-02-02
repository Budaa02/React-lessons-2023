import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function UsersTable() {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },

    { field: "firstName", headerName: "First name", width: 130 },

    { field: "phoneNumber", headerName: "Phone number", width: 130 },
    { field: "email", headerName: "E-Mail", width: 160 },
    { field: "role", headerName: "Role", width: 130 },
    { field: "disabled", headerName: "Disabled", width: 130 },
    { field: "avatar", headerName: "Avatar", width: 130 },
    { field: "action", headerName: "Actions", width: 130 },
    // {
    //   field: "fullName",
    //   headerName: "Full name",
    //   description: "This column has a value getter and is not sortable.",
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params) =>
    //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    // },
  ];

  const rows = [
    {
      id: 1,
      lastName: "Snow",
      firstName: "Jon",
      email: "tbudaa2@gmail.com",
      disabled: "Yes",
      role: "Admin",
    },
    {
      id: 2,
      lastName: "Lannister",
      firstName: "Cersei",
      email: "tbudaa2@gmail.com",
      disabled: "Yes",
      role: "Admin",
    },
    {
      id: 3,
      lastName: "Lannister",
      firstName: "Jaime",
      email: "tbudaa2@gmail.com",
      disabled: "Yes",
      role: "Admin",
    },
    {
      id: 4,
      lastName: "Stark",
      firstName: "Arya",
      email: "tbudaa2@gmail.com",
      disabled: "Yes",
      role: "Admin",
    },
    {
      id: 5,
      lastName: "Targaryen",
      firstName: "Daenerys",
      email: "tbudaa2@gmail.com",
      disabled: "Yes",
      role: "Admin",
    },
    {
      id: 6,
      lastName: "Melisandre",
      firstName: null,
      email: "tbudaa2@gmail.com",
      disabled: "Yes",
      role: "Admin",
    },
    {
      id: 7,
      lastName: "Clifford",
      firstName: "Ferrara",
      email: "tbudaa2@gmail.com",
      disabled: "Yes",
      role: "Admin",
    },
    {
      id: 8,
      lastName: "Frances",
      firstName: "Rossini",
      email: "tbudaa2@gmail.com",
      disabled: "Yes",
      role: "Admin",
    },
    {
      id: 9,
      lastName: "Roxie",
      firstName: "Harvey",
      email: "tbudaa2@gmail.com",
      disabled: "Yes",
      role: "Admin",
    },
  ];
  return (
    <div style={{ height: 400, width: "100%" }}>
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
