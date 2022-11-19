const express = require('express');
const userRoutes = require("./routes/userRoutes")
const app = express()

app.use(express.json())

app.use("/test", userRoutes)

app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});
  

module.exports = app;
