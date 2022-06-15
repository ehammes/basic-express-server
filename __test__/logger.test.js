'use strict';

const { server } = require('../src/server');
const supertest = require('supertest');
const request = supertest(server);

describe('Logger Tests', () => {
  describe('GET routes Tests', () => {
    test('/person route logs a console with method and path', async () => {
      let response = await request.get('/person?name=Fred');
      expect(response.status).toEqual(200);
      expect(response.text).toEqual(); // Need to revisit this
    });
  });
});