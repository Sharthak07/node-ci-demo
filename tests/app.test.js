
const request = require('supertest');
const app = require('../src/app');

// Test 1 - Home route
test('GET / returns welcome message', async () => {
  const res = await request(app).get('/');
  expect(res.statusCode).toBe(200);
  expect(res.body.message).toBe('Hello from CI pipeline!');
});

// Test 2 - Add route
test('GET /add/2/3 returns 5', async () => {
  const res = await request(app).get('/add/2/3');
  expect(res.statusCode).toBe(200);
  expect(res.body.result).toBe(5);
});

// Test 3 - Greet route
test('GET /greet/John returns Hello, John', async () => {
  const res = await request(app).get('/greet/John');
  expect(res.statusCode).toBe(200);
  expect(res.body.message).toBe('Hello, John');
});