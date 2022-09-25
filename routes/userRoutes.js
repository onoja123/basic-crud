const userController = require("./../contollers/userController")
const express = require("express");
const { route } = require("../app");

const router = express.router();

router.route("/")
.get(userController.getAllUsers)
.get(userController.createUser)

router.route("/:id")
.get(userController.getUser)
.patch(userController.updateUser)
.delete(userController.deleteUser)

module.exports = router