const { nodeEnv } = require("./utils.cjs");
const databaseConfig = require("../database/dbConfig.cjs");

module.exports = {
  env: nodeEnv,
  is_test: false,
  name: "restaurant-manager-js",
  database: databaseConfig,
};