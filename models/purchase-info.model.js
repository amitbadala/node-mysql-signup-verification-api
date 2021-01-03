module.exports = (sequelize, Sequelize) => {
  const PurchaseInfo = sequelize.define("purchase_info", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    vendor_id: {
      type: Sequelize.INTEGER,
    },
    invoice_number: {
      type: Sequelize.INTEGER,
    },
    invoice_date: {
      type: Sequelize.DATE,
    },
    total_amount: {
      type: Sequelize.BIGINT,
    },
    total_quantity: {
      type: Sequelize.INTEGER,
    },
    total_weight: {
      type: Sequelize.INTEGER,
    },
    transport_no: {
      type: Sequelize.INTEGER,
    },
    payment_date: {
      type: Sequelize.DATE,
    },
    payment_made: {
      type: Sequelize.BOOLEAN,
    },
    payment_info: {
      type: Sequelize.BOOLEAN,
    },
    notes: {
      type: Sequelize.STRING,
    },
  });

  return PurchaseInfo;
};
