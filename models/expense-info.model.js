module.exports = (sequelize, Sequelize) => {
  const ExpenseInfo = sequelize.define("expenses_info", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    expense_type_id: {
      type: Sequelize.INTEGER,
    },
    amount: {
      type: Sequelize.INTEGER,
    },
    expense_date: {
      type: Sequelize.INTEGER,
    },
    notes: {
      type: Sequelize.STRING,
    },
  });

  return ExpenseInfo;
};
