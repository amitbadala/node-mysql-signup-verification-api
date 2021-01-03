const express = require("express");
const router = express.Router();
const db = require("./../models");
const DailyLogs = db.DailyLogs;

// routes
router.get("/daily-logs", getDailyLogs);
router.post("/daily-logs", addDailyLog);
router.put("/daily-logs", updateDailyLog);

router.get("/credit-invoice", getCreditInvoices);
router.post("/credit-invoice", addCreditInvoice);
router.put("/credit-invoice", updateCreditInvoice);

router.get("/customer", addCustomer);
router.post("/customer", addCustomer);
router.put("/customer", updateCustomer);

router.get("/expense-category", addExpenseCategories);
router.post("/expense-info", addExpenseInfo);
router.put("/expense-info", updateExpenseInfo);

router.get("/expense-category", addExpenseCategories);
router.post("/expense-info", addExpenseInfo);
router.put("/expense-info", updateExpenseInfo);

router.get("/purchase-info", getPurchases);
router.post("/purchase-info", addPurchaseInfo);
router.put("/purchase-info", updateExpenseInfo);

router.get("/vendor", getVendors);
router.post("/vendor", addVendor);
router.put("/vendor", updateVendor);

module.exports = router;

// Daily Logs

function getDailyLogs(req, res, next) {
  console.log(req.body);
  res.json({ hello: 10 });
}

function addDailyLog(req, res) {
  // Create a Tutorial
  const dailyLogs = {
    total_cash: 100000,
    created_date: new Date(),
  };

  // Save Tutorial in the database
  DailyLogs.create(dailyLogs)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
}

function updateDailyLog(req, res, next) {
  res.json({ hello: 10 });
}

// Credit Invoice

function getCreditInvoices(req, res, next) {
  res.json({ hello: 10 });
}

function addCreditInvoice(req, res, next) {
  res.json({ hello: 10 });
}

function updateCreditInvoice(req, res, next) {
  res.json({ hello: 10 });
}

// Customers

function addCustomer(req, res, next) {
  res.json({ hello: 10 });
}

function updateCustomer(req, res, next) {
  res.json({ hello: 10 });
}

// Expenses

function addExpenseCategories(req, res, next) {
  res.json({ hello: 10 });
}

function addExpenseInfo(req, res, next) {
  res.json({ hello: 10 });
}

function updateExpenseInfo(req, res, next) {
  res.json({ hello: 10 });
}

// Purchase

function getPurchases(req, res, next) {
  res.json({ hello: 10 });
}

function addPurchaseInfo(req, res, next) {
  res.json({ hello: 10 });
}

function updatePurchaseInfo(req, res, next) {
  res.json({ hello: 10 });
}

// Vendor

function getVendors(req, res, next) {
  res.json({ hello: 10 });
}

function addVendor(req, res, next) {
  res.json({ hello: 10 });
}

function updateVendor(req, res, next) {
  res.json({ hello: 10 });
}
