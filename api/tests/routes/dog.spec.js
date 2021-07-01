/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Dog, Temperament, conn } = require('../../src/db.js');

const agent = session(app);


describe('Routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Dog.sync({ force: false })
  .then(() => Dog.findAll()
  ));
  describe('GET DOGS', () => {
    it('expect 200', async () =>
        await agent.get('/dogs').expect(200)
    );
  });
  beforeEach(() => Dog.sync({ force: false })
  .then(() => Temperament.findAll()
  ));
  describe('GET TEMPERAMENTS', () => {
    it('expect 200', async () =>
        await agent.get('/temperaments').expect(200)
    );
  });
  beforeEach(() => Dog.sync({ force: false })
  .then(() => Dog.findOne(
    {where: {
      name : 'bulldog'
    }})
  ));
  describe('GET SEARCH', () => {
    it('expect 200', async () =>
        await agent.get('/dogs?name=bulldog').expect(200)
    );
  });
}).timeout(10000)
