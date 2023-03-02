import express from "express";
// import employee_routes from "./routes/employees";
import emp_router from "./routes/employees.js";
// import { getEmployees } from "./services/employee-services.js";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(emp_router);
app.get("/", (request, response) => {
  response.send(
    "<h1 style='text-align: center;background-color:orange'> Day-69 </h1>"
  );
});
app.listen(PORT, () => {
  console.log(`express app is running on hhtp://localhost:${PORT}`);
});
