const Redis = require("ioredis");
const config = require("../config");

// console.log(config);
// const redis = new Redis(config.redis.url);

const redis = new Redis({
  host: config.redis.host || "localhost",
  port: config.redis.port || 6379,
});

module.exports = redis;
