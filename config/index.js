require("dotenv").config();

const config = {
  port: process.env.PORT,
  redis: {
    url: process.env.REDIS_URI,
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  },
  environment: process.env.NODE_ENV || "development",
};

module.exports = config;
