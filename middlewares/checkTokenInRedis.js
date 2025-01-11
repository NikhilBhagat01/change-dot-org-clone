const redis = require("../redis/redis");
const jwt = require("jsonwebtoken");

const checkTokenInRedis = async (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1]; // Get token from Authorization header
  if (!token) return res.status(401).json({ message: "No token provided." });

  try {
    // Verify the JWT token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // const redisToken = await redis.get(`user:${decoded.id}:token`);

    // if (!redisToken || redisToken !== token) {
    //   return res.status(401).json({ message: "Invalid or expired token." });
    // }

    // Attach the decoded user info to the request object
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token." });
  }
};

module.exports = checkTokenInRedis;
