const config = require("../config.json");

const {
  database: { name, user, password, host, dialect, pool },
} = config;

const Sequelize = require("sequelize");
const sequelize = new Sequelize(name, user, password, {
  host,
  dialect,
  operatorsAliases: false,
  define: {
    underscored: true,
  },
  pool: {
    max: pool.max,
    min: pool.min,
    acquire: pool.acquire,
    idle: pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.DailyLogs = require("./daily-logs.model")(sequelize, Sequelize);

module.exports = db;
