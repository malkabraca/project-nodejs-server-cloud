const express = require("express");
const router = express.Router();

const authRouter = require("./api/auth");
const cardsRouter = require("./api/cards");
const ordersRouter = require("./api/orders");
const ordersTableRouter = require("./api/ordersTable");

// http://localhost:8181/api
// http://localhost:8181/api/
router.get("/", (req, res) => {
  res.json({ msg: "sub route" });
});

//http://localhost:8181/api/register
router.get("/register", (req, res) => {
  res.json({ msg: "register" });
});

//http://localhost:8181/api/auth/
router.use("/auth", authRouter);

//http://localhost:8181/api/cards
router.use("/cards", cardsRouter);

//http://localhost:8181/api/order
router.use("/orders", ordersRouter);

//http://localhost:8181/api/ordersTable
router.use("/ordersTable", ordersTableRouter);


module.exports = router;
