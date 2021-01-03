module.exports = (sequelize, Sequelize) => {
  const Customer = sequelize.define("customers", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    business_name: {
      type: Sequelize.STRING,
    },
    poc_name: {
      type: Sequelize.STRING,
    },
    poc_contact: {
      type: Sequelize.STRING,
    },
    address: {
      type: Sequelize.STRING,
    },
    gst: {
      type: Sequelize.STRING,
    },
  });

  return Customer;
};
