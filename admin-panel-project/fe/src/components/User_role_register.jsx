import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { Link } from "react-router-dom";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function NativeSelectDemo() {
  function handleCreateFormSubmit(role) {
    createRole(role);
  }
  async function createRole() {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
  }
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel
          variant="standard"
          htmlFor="uncontrolled-native"
        >
          User_role
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: "age",
            id: "uncontrolled-native",
          }}
        >
          <option value={10}>admin</option>
          <option value={20}>user</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
      </FormControl>

      <Stack
        spacing={2}
        direction="row"
      >
        <Button
          variant="contained"
          onSubmit={handleCreateFormSubmit}
        >
          Confirm
        </Button>
        <Link to="/user_role">
          <Button variant="contained">Cancel</Button>
        </Link>
      </Stack>
    </Box>
  );
}
