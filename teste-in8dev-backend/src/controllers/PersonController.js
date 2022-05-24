const PersonRepository = require('../repositories/PersonRepository');


module.exports = {
  async store(req, res) {
    const personData = req.body;
    const person = await PersonRepository.insert(personData);

    res.json(person);
  },

  async getAll(req, res){
    const persons = await PersonRepository.showAll();

    res.json(persons);
  }
}