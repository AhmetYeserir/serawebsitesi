const express = require("express");
const router = express.Router();
const personService = require("../services/person.service");

router.get("/", async (req, res) => {
  try {
    var people = await personService.getAll();
    res.json(people);
  } catch (error) {
    console.log(error);
    res.status(500).json({ statusCode: 500, error: "Something went wrong" });
  }
});

router.post("/", async (req, res) => {
  try {
    var createdPerson = await personService.createPerson(req.body);
    res.status(201).json(createdPerson);
  } catch (error) {
    console.log(error);
    res.status(500).json({ statusCode: 500, error: "Something went wrong" });
  }
});

router.get("/:username", async (req, res) => {
  try {
    var person = await personService.findPersonByUsername(req.params.username);
    if (!person) {
      return res
        .status(404)
        .json({ statusCode: 404, error: "Person Does not exist" });
    }
    return res.json(person);
  } catch (error) {
    return res
      .statusCode(500)
      .json({ statusCode: 500, error: "Something went wrong" });
  }
});

module.exports = router;

// route functions