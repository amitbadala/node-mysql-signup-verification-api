module.exports = (sequelize, Sequelize) => {
  const Vendor = sequelize.define("vendors", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
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

  return Vendor;
};
