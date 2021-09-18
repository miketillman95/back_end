const server = require('../server')
const request = require('supertest')

describe( 'test recipes router works ', () => {
    ('new recipe add', async () => {
        const res = await request(server).get('/api/recipes/')
        expect(res.statusCode).toBe(200)
    })

})

