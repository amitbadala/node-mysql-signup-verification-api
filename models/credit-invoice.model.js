module.exports = (sequelize, Sequelize) => {
  const CreditInvoice = sequelize.define("credit_invoice", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
    payment_date: {
      type: Sequelize.DATE,
    },
    payment_made: {
      type: Sequelize.BOOLEAN,
    },
    notes: {
      type: Sequelize.STRING,
    },
  });

  return CreditInvoice;
};
