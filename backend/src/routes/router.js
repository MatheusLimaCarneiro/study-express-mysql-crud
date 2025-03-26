const express = require("express");
const tasksController = require("../controllers/tasksController");
const tasksMiddleware = require("../middlewares/tasksMiddleware");

const router = express.Router();

router.get("/tasks", tasksController.getAll);
router.post("/tasks", tasksMiddleware.validateBody, tasksController.createTask);
router.delete("/tasks/:id", tasksMiddleware.validateDelete, tasksController.deleteTask);
router.put("/tasks/:id", tasksMiddleware.validateUpdate, tasksController.updateTask);

module.exports = router;
