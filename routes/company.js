const apiRouter = require("express");
const companyRouter = apiRouter.Router();
require("dotenv").config();
const jwt = require("jsonwebtoken");
const { getAllCompanies, searchPartsNumber } = require("../db");
const { JWT_SECRET } = process.env;

companyRouter.get("/", async (req, res, next) => {
  try {
    const company = await getAllCompanies();
    res.send({ company });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

companyRouter.get("/parts/:id", async (req, res, next) => {
  const partNumber = req.params.id;
  console.log("request 19", partNumber);
  try {
    const part = await searchPartsNumber(partNumber);
    console.log("part 22", part);
    res.send({ part });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

module.exports = companyRouter;
