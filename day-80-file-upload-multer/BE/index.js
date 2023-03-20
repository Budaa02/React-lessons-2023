console.log("Day-80");

const express = require("express");
const cors = require("cors");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const PORT = 8080;
const app = express();
app.use(express.json());
app.use(cors());
const upload = multer({ storage: storage });

app.use("/uploads", express.static("uploads"));

app.get("/", (request, response) => {
  response.status(200).send("<h1>Hello Day-80 Filupload Multer</h1>");
});

app.post("/fileUpload", upload.single("image"), (request, response, next) => {
  console.log(request.file);
  response.json({
    data: [],
  });
});
app.listen(PORT, () => {
  console.log(`Express Application is running on http://localhost:${PORT}`);
});
