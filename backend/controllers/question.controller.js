const express = require("express");
const router = express.Router();
const questionsService = require("../services/question.service");

router.get("/", async (req, res) => {
  try {
    var questions = await questionsService.getAll();
    res.json(questions);
  } catch (error) {
    console.log(error);
    res.status(500).json({ statusCode: 500, error: "Something went wrong" });
  }
});

router.post("/", async (req, res) => {
  try {
    var createdQuestion = await questionsService.createQuestion(req.body);
    res.status(201).json(createdQuestion);
  } catch (error) {
    console.log(error);
    res.status(500).json({ statusCode: 500, error: "Something went wrong" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    var question = await questionsService.findQuestionById(req.params.id);
    if (!question) {
      return res
        .status(404)
        .json({ statusCode: 404, error: "Question Does not exist" });
    }
    return res.json(question);
  } catch (error) {
    return res
      .statusCode(500)
      .json({ statusCode: 500, error: "Something went wrong" });
  }
});
module.exports = router;

// route functions