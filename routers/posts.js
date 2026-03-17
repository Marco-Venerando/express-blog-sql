const express = require("express");
const router = express.Router();

/*
IMPORT CONTROLLER
*/

const postsController = require("../controllers/postsController");

console.log("PostsController:", postsController);

/*
ROTTE CRUD
*/

// INDEX
router.get("/", postsController.index);

// SHOW
router.get("/:id", postsController.show);

// CREATE
router.post("/", postsController.create);

// UPDATE
router.put("/:id", postsController.update);

// DELETE
router.delete("/:id", postsController.destroy);

module.exports = router;
