const jwt = require("jsonwebtoken");

// module.exports = (req, res, next) => {
//   try {
//     const token = req.header("Authorization");

//     if (!token) {
//       return res.status(401).json({ message: "No token, access denied" });
//     }

//     const verified = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = verified;

//     next();
//   } catch (error) {
//     res.status(400).json({ message: "Invalid token" });
//   }
// };

module.exports = (req, res, next) => {
  try {
    const userId = req.header("userId");

    if (!userId) {
      return res.status(401).json({ message: "No userId provided" });
    }

    // manually attach user
    req.user = { id: userId };

    next();
  } catch (error) {
    res.status(400).json({ message: "Error in auth" });
  }
};