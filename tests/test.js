const { credentials } = require('../functions/.runtimeconfig.js');
process.env.FIREBASE_CONFIG = credentials;
// const test = require('firebase-functions-test')({
//   databaseURL: credentials.databaseURL,
//   storageBucket: credentials.storageBucket,
//   projectId: credentials.projectId,
// }, credentials.keyId);
const { firebaseApp } = require('../functions/services/firebaseService')

const assert = require('assert');
const chai = require('chai');
const chaihttp = require('chai-http');
const expect = chai.expect;
chai.use(chaihttp);

const newAcc = { email: `testacc+${Math.floor(10_000 * Math.random())}@aaa.fr`, password: 'azertyuiop' }
const validAcc = { email: `a@aaa.fr`, password: 'dcfvgbhn' }
const invalidAcc = { email: `wrong`, password: 'wrong' }
const local = chai.request('http://localhost:5201')

describe('Auth functionnalities', () => {
  beforeEach(() => {
    return local.post('/signOut')
  })

  it('Should create account  and access protected', () => {
    return local.post('/signup')
      .type('form')
      .send(newAcc)
      .then(res => {
        // yeah, I should test for session cookie, but I didn't take time so set that up
        expect(res.req.path).to.equal('/addressbook')
      })
  });

  it('Should login and access protected', () => {
    return local.post('/signin')
      .type('form')
      .send(validAcc)
      .then(res => {
        expect(res.req.path).to.equal('/addressbook')
      })
  })

});

describe('Protected page access', () => {
  beforeEach(() => {
    return local.post('/signOut')
  })

  it('Should allow access', async () => {
    await local.post('/signin')
      .type('form')
      .send(validAcc)
    return local.get('/addressbook')
      .then(res => {
        expect(res.req.path).to.equal('/addressbook')
      })
  })

  it('Should block unauthenticated user from accessing', () => {
    return local.get('/addressbook')
      .then(res => {
        expect(res.req.path).to.equal('/')
      })
  })
})

describe('Contact form', () => {
  it('should allow the creation of new contact', async () => {
    await local.post('/signin')
      .type('form')
      .send(validAcc)
    return local.post('/newcontact')
      .type('form')
      .send({
        firstname: 'first',
        lastname: 'last',
        phone: '123456789',
        address: 'some address'
      })
      .then(res => {
        expect(res.req.path).to.equal('/addressbook')
      })
  })
})
