const jwt = require("jsonwebtoken");

const verifyToken = (request, response, next) => {
  const token =
    request.body.token ||
    request.query.token ||
    request.headers["x-access-token"];
  if (!token) {
    return response.status(403).json({
      success: false,
      message: "Hereglegchiin token oruulah shaardlagtai.",
    });
  }
  try {
    const decoded = jwt.verify(token, "MySuperDuperPrivateKey");

    request.user = decoded;
  } catch (error) {
    return response.status(401).json({
      success: false,
      message: "Hereglegchiin token buruu, esvel idvehgui baina.",
    });
  }
  return next();
};

module.exports = verifyToken;
