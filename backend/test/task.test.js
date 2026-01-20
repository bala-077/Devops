const request = require('supertest');
const { app, server } = require("../index");
const mongoose = require('mongoose');

describe('GET api/tasks', () => {
    it('It should return 200 is OK', async () => {
        const res = await request(app).get('/api/tasks');
        expect(res.status).toBe(200);
    })
    it('should ', async () => {
        expect().to
    });
})

afterAll(async () => {
    await mongoose.connection.close();
    await server.close();
})