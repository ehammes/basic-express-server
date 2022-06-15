'use strict';

const { server } = require('../src/server');
const supertest = require('supertest');
const request = supertest(server);

describe('Validator Tests', () => {
  describe('GET routes Tests', () => {
    test('/person route contains a query string', async () => {
      let response = await request.get('/person?name=Fred');
      expect(response.status).toEqual(200);
      expect(response.body.name).toEqual('Fred'); //instead of response.text, using response.body.name to access the name in the object
    });
    test('500 if no name exists in the query string', async () => {
      let response= await request.get('/person');
      expect(response.status).toEqual(500);
    });
  });
});