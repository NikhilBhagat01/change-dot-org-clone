const express = require("express");
// const routes = require("./routes");
// const Redis = require("ioredis");
const config = require("./config");
const redis = require("./redis/redis");

const app = express();

// const redis = new Redis(config.redis.url);

// Middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome to redis test server");
});

// Basic route to interact with Redis
// app.get("/", async (req, res) => {
//   // Increment a Redis counter on each visit
//   await redis.incr("counter");
//   const counter = await redis.get("counter");
//   res.send(`Hello, world! You've visited this page ${counter} times.`);
// });

// Routes
// app.use("/api", routes);

// Error handling middleware
// app.use(errorHandler);

module.exports = app;
