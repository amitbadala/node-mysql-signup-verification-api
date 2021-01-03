module.exports = (sequelize, Sequelize) => {
  const ExpenseCategories = sequelize.define("expense_categories", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
    },
  });

  return ExpenseCategories;
};
