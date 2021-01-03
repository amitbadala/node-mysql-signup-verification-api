const express = require("express");
const router = express.Router();
const db = require("./../models");

const DailyLogs = db.DailyLogs;
const CreditInvoice = db.CreditInvoice;
const PurchaseInfo = db.PurchaseInfo;
const Customer = db.Customer;
const Vendor = db.Vendor;
const ExpenseCategory = db.ExpenseCategory;
const ExpenseInfo = db.ExpenseInfo;

// routes
router.get("/daily-logs", getDailyLogs);
router.post("/daily-logs", addDailyLog);
router.put("/daily-logs/:id", updateDailyLog);

router.get("/credit-invoice", getCreditInvoices);
router.post("/credit-invoice", addCreditInvoice);
router.put("/credit-invoice/:id", updateCreditInvoice);

router.get("/customer", addCustomer);
router.post("/customer", addCustomer);
router.put("/customer/:id", updateCustomer);

router.get("/expense-category", addExpenseCategories);
router.post("/expense-info", addExpenseInfo);
router.put("/expense-info/:id", updateExpenseInfo);

router.get("/expense-category", addExpenseCategories);
router.post("/expense-info", addExpenseInfo);
router.put("/expense-info/:id", updateExpenseInfo);

router.get("/purchase-info", getPurchases);
router.post("/purchase-info", addPurchaseInfo);
router.put("/purchase-info/:id", updatePurchaseInfo);

router.get("/vendor", getVendors);
router.post("/vendor", addVendor);
router.put("/vendor/:id", updateVendor);

module.exports = router;

// Daily Logs

async function getDailyLogs(req, res) {
  try {
    const logs = await DailyLogs.findAll();
    res.send(logs);
  } catch (e) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving daily logs.",
    });
  }
}

async function addDailyLog(req, res) {
  const dailyLogs = req.body;
  try {
    const result = await DailyLogs.create(dailyLogs);
    return res.send(result);
  } catch (err) {
    return res.status(500).send({
      message: err.message || "Some error occurred while adding logs.",
    });
  }
}

async function updateDailyLog(req, res) {
  const id = req.params.id;
  try {
    const num = await DailyLogs.update(req.body, {
      where: { id: id },
    });
    if (num == 1) {
      res.send({
        message: "Records was updated successfully.",
      });
    } else {
      res.send({
        message: `Cannot update Records with id=${id}. Maybe Records was not found or req.body is empty!`,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Error updating Records with id=" + err,
    });
  }
}

// Credit Invoice

async function getCreditInvoices(req, res) {
  try {
    const logs = await CreditInvoice.findAll();
    res.send(logs);
  } catch (e) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving daily logs.",
    });
  }
}

async function addCreditInvoice(req, res) {
  const creditInvoice = req.body;
  try {
    const result = await CreditInvoice.create(creditInvoice);
    return res.send(result);
  } catch (err) {
    return res.status(500).send({
      message: err.message || "Some error occurred while adding logs.",
    });
  }
}

async function updateCreditInvoice(req, res) {
  const id = req.params.id;
  try {
    const num = await CreditInvoice.update(req.body, {
      where: { id: id },
    });
    if (num == 1) {
      res.send({
        message: "Records was updated successfully.",
      });
    } else {
      res.send({
        message: `Cannot update Records with id=${id}. Maybe Records was not found or req.body is empty!`,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Error updating Records with id=" + err,
    });
  }
}

// Customers

async function addCustomer(req, res) {
  const customer = req.body;
  try {
    const result = await Customer.create(customer);
    return res.send(result);
  } catch (err) {
    return res.status(500).send({
      message: err.message || "Some error occurred while adding logs.",
    });
  }
}

async function updateCustomer(req, res) {
  const id = req.params.id;
  try {
    const num = await Customer.update(req.body, {
      where: { id: id },
    });
    if (num == 1) {
      res.send({
        message: "Records was updated successfully.",
      });
    } else {
      res.send({
        message: `Cannot update Records with id=${id}. Maybe Records was not found or req.body is empty!`,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Error updating Records with id=" + err,
    });
  }
}

// Expenses

async function addExpenseCategories(req, res) {
  const expenseCategory = req.body;
  try {
    const result = await ExpenseCategory.create(expenseCategory);
    return res.send(result);
  } catch (err) {
    return res.status(500).send({
      message: err.message || "Some error occurred while adding logs.",
    });
  }
}

async function addExpenseInfo(req, res) {
  const expenseInfo = req.body;
  try {
    const result = await ExpenseInfo.create(expenseInfo);
    return res.send(result);
  } catch (err) {
    return res.status(500).send({
      message: err.message || "Some error occurred while adding logs.",
    });
  }
}

async function updateExpenseInfo(req, res) {
  const id = req.params.id;
  try {
    const num = await ExpenseInfo.update(req.body, {
      where: { id: id },
    });
    if (num == 1) {
      res.send({
        message: "Records was updated successfully.",
      });
    } else {
      res.send({
        message: `Cannot update Records with id=${id}. Maybe Records was not found or req.body is empty!`,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Error updating Records with id=" + err,
    });
  }
}

// Purchase

async function getPurchases(req, res) {
  try {
    const logs = await PurchaseInfo.findAll();
    res.send(logs);
  } catch (e) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving daily logs.",
    });
  }
}

async function addPurchaseInfo(req, res) {
  const purchaseInfo = req.body;
  try {
    const result = await PurchaseInfo.create(purchaseInfo);
    return res.send(result);
  } catch (err) {
    return res.status(500).send({
      message: err.message || "Some error occurred while adding logs.",
    });
  }
}

async function updatePurchaseInfo(req, res) {
  const id = req.params.id;
  try {
    const num = await PurchaseInfo.update(req.body, {
      where: { id: id },
    });
    if (num == 1) {
      res.send({
        message: "Records was updated successfully.",
      });
    } else {
      res.send({
        message: `Cannot update Records with id=${id}. Maybe Records was not found or req.body is empty!`,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Error updating Records with id=" + err,
    });
  }
}

// Vendor

async function getVendors(req, res) {
  try {
    const logs = await Vendor.findAll();
    res.send(logs);
  } catch (e) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving daily logs.",
    });
  }
}

async function addVendor(req, res) {
  const vendor = req.body;
  try {
    const result = await Vendor.create(vendor);
    return res.send(result);
  } catch (err) {
    return res.status(500).send({
      message: err.message || "Some error occurred while adding logs.",
    });
  }
}

async function updateVendor(req, res) {
  const id = req.params.id;
  try {
    const num = await Vendor.update(req.body, {
      where: { id: id },
    });
    if (num == 1) {
      res.send({
        message: "Records was updated successfully.",
      });
    } else {
      res.send({
        message: `Cannot update Records with id=${id}. Maybe Records was not found or req.body is empty!`,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Error updating Records with id=" + err,
    });
  }
}
