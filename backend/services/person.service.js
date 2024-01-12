const db = require("../config/db");

const getAll = async () => {
  return await db.Person.findAll();
};

const findPersonByUsername = async (username) => {
  return await db.Person.findOne({where:{Username:username}});
};

const createPerson = async ({ Username, Password }) => {
  const newPerson = await db.Person.create({ Username, Password });
  return newPerson;
};

const updatePerson = async ({ Id, Username, Password }) => {
  await db.Person.update(
    { Username, Password },
    {
      where: {
        Id: Id,
      },
    }
  );
  return { Id, Username, Password };
};

const deletePerson = async (Id) => {
  await db.Person.destroy({
    where: { Id: Id },
  });
};

module.exports = {
  getAll,
  findPersonByUsername,
  createPerson,
  updatePerson,
  deletePerson,
};