const db = require("../config/db");

const getAll = async () => {
  return await db.Questions.findAll();
};

const findQuestionById = async (id) => {
  return await db.Questions.findByPk(id);
};

const createQuestion = async ({ Text }) => {
  const newQuestion = await db.Questions.create({ Text });
  return newQuestion;
};

module.exports = {
  getAll,
  findQuestionById,
  createQuestion,
};