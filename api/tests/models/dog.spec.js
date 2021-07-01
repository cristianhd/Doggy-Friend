const { Dog, conn } = require('../../src/db.js');
const { expect } = require('chai');
const { v4: uuidv4 } = require('uuid');

describe('Dog model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Dog.sync({ force: true }));
    describe('name', () => {
      it('Should create a breed with name bulldog colombiano', () => {
        Dog.create({ 
          id: uuidv4(), name: 'bulldog colombiano',  weight: "30 - 60", life_span:"12 - 15 years", });
      });
      it('breed bulldog colombiano should be created', () => {
        Dog.findOne({
          where: { name: 'bulldog colombiano' }
        })
      });
    });
  });
});