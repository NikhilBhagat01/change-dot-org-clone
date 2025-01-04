const Redis = require("ioredis");
const config = require("../config");

const redis = new Redis(config.redis.url);

module.exports = redis;
