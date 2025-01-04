require("dotenv").config();

const config = {
  port: process.env.PORT,
  redis: {
    url: process.env.REDIS_URI,
  },
  environment: process.env.NODE_ENV || "development",
};

module.exports = config;
