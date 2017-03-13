'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

const config = require('../config');

const hostURL = config.getURL();
const apiRootURL = '/api/users';
const completeURL = hostURL + apiRootURL;

const allUsersUrl = '/';

describe('User Tests', () => {
  describe('GET ' + apiRootURL + allUsersUrl, () => {
    it('response status should be 200', (done) => {
      chai.request(completeURL)
        .get(allUsersUrl)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res).to.be.an('object');
          done();
        });
    });
  });
});
