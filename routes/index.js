const apiRouter = require("express").Router();
require("dotenv").config();
const jwt = require("jsonwebtoken");
const { getUsersByID } = require("../db");
const { JWT_SECRET } = process.env;

apiRouter.get("/", (req, res, next) => {
  res.send({
    message: "API is under construction!",
  });
});

apiRouter.use(async (req, res, next) => {
  const auth = req.headers.authorization;
  const prefix = "Bearer ";

  if (!auth) {
    next();
  } else if (auth.startsWith(prefix)) {
    const token = auth.slice(prefix.length);
    console.log("Here", token);
    try {
      const parsedToken = jwt.verify(token, JWT_SECRET);
      "parsed", parsedToken;

      const id = parsedToken && parsedToken.id;
      id;
      getUsersByID;
      if (id) {
        req.user = await getUsersByID(id);
        req.user;
        next();
      }
    } catch (error) {
      next(error);
    }
  } else {
    next({
      name: "AuthorizationHeaderError",
      message: `Authorization token must start with ${prefix}`,
    });
  }
});

const usersRouter = require("./users");
apiRouter.use("/users", usersRouter);

const companyRouter = require("./company");
apiRouter.use("/company", companyRouter);

const emailRouter = require("./email");
apiRouter.use("/email", emailRouter);

apiRouter.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = apiRouter;
