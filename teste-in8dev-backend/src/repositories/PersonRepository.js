const PersonModel = require('../schemas/PersonSchema');

const insert = async (person) => {
  const personModel = new PersonModel(person);

  const newPerson = await personModel.save();

  return newPerson
}

const showAll = async() => {
  const persons = await PersonModel.find({});
  return persons;
}

module.exports = {
  insert,
  showAll
}