module.exports = (sequelize, Sequelize) => {
  const DailyLogs = sequelize.define("daily_accounts", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    logs_date: {
      type: Sequelize.DATE,
    },
    total_quantity: {
      type: Sequelize.INTEGER,
    },
    total_cash: {
      type: Sequelize.DECIMAL,
    },
    total_gr: {
      type: Sequelize.INTEGER,
    },
  });

  return DailyLogs;
};
