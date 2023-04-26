const multer = require("multer");

module.exports = multer({
  storage: multer.diskStorage({}),
  limits: { fileSize: 100_000_00 },
});
