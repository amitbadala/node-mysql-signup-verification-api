const config = require("../config.json");

const {
  database: { name, user, password, host, dialect, pool },
} = config;

const Sequelize = require("sequelize");
const sequelize = new Sequelize(name, user, password, {
  host,
  dialect,
  operatorsAliases: 0,
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
db.CreditInvoice = require("./credit-invoice.model")(sequelize, Sequelize);
db.Customer = require("./customer.model")(sequelize, Sequelize);
db.Vendor = require("./vendor.model")(sequelize, Sequelize);
db.PurchaseInfo = require("./purchase-info.model")(sequelize, Sequelize);
db.ExpenseInfo = require("./expense-info.model")(sequelize, Sequelize);
db.ExpenseCategory = require("./expense-category.model")(sequelize, Sequelize);

module.exports = db;
