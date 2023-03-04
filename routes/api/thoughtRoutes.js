const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thoughtsController");

// /api/thoughts
router.route("/").get(getThoughts).post(createThought);

router.route("/:thoughtId").get(getSingleThought).delete(deleteThought).put(updateThought)

router.route("/:thoughtId/reaction").post(addReaction);

router.route("/:thoughtId/reaction/:reactionId").delete(removeReaction);

module.exports = router;
