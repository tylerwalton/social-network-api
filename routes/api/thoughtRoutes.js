const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  addThought,
  removeThought,
} = require("../../controllers/thoughtsController");

// /api/thoughts
router.route("/").get(getThoughts).post(createThought);

router.route("/:thoughtId").get(getSingleThought).delete(deleteThought);

router.route("/:thoughtId/thought").post(addThought);

router.route("/:thoughtId/thought/:thoughtId").delete(removeThought);

module.exports = router;
