const request = require('supertest');
const Server = require('../models/server');
const server = new Server();

const token = "12345"
const datosprueba = {
    nombre:"atelico nacional", 
    numero:"11"
}
const deporteId = 1
;

describe('GET /api/deporte', () => {
    test('respuesta codigo 200', async () => {
        const response = await request(server.app).get('/api/users').send();
        expect(response.statusCode).toBe(200);
        // expect(response.headers['Content-Type']).toEqual(
        //     expect.stringContaining("json")
        // );
    });

    // test('respuesta json', async () => {
    //     const response = await request(server.app).get('/api/users').send();
    //     // expect(response.statusCode).toBe(200);
    //     expect(response.headers['Content-Type']).toEqual(
    //         expect.stringContaining("json")
    //     );
    // });
});

describe("post/api/deporte", () => {

    test("Crear nombre", async () => {
        return request(server.app)
        .post('/api/users')
        .set('Authorization', 'Bearer ' +token)
        .send(datosprueba)
        .expect('Content-Type', /json/)
        .expect(201)
        .then(({body})=>{
            datosprueba.nombre=body.nombre
            
        });
    });

    test("compra de uniformes", async () => {
            return request(server.app)
            .post('/api/users')
            .set('Authorization', 'Bearer ' +token)
            .send(datosprueba)
            .expect('Content-Type', /json/)
            .expect(201)
            .then(({body})=>{
                datosprueba.nombre=body.nombre
                
            });
        });

        test("compra de acsesorios", async () => {
            return request(server.app)
            .post('/api/users')
            .set('Authorization', 'Bearer ' +token)
            .send(datosprueba)
            .expect('Content-Type', /json/)
            .expect(201)
            .then(({body})=>{
                datosprueba.nombre=body.nombre
                
            });
        });

        test("crear equipo", async () => {
            return request(server.app)
            .post('/api/users')
            .set('Authorization', 'Bearer ' +token)
            .send(datosprueba)
            .expect('Content-Type', /json/)
            .expect(201)
            .then(({body})=>{
                datosprueba.nombre=body.nombre
                
            });
        });


        test("confirmar compra", async () => {
            return request(server.app)
            .post('/api/users')
            .set('Authorization', 'Bearer ' +token)
            .send(datosprueba)
           .expect(201)
           .then(({body})=>{
                console.log("compra existosa")
           });
        });
    });

    test("Se puede crear deporte", async () => {
        return request(server.app)
        .post('/api/users')
        .send(datosprueba)
       .expect(201)
    });



describe("put /api/deporte/:id", () => {

    test("Actualizacion deporte", async () => {
        return request(server.app)
        .put(`/api/users/${deporteId}`)
        .set('Authorization', 'Bearer ' +token)
        .send(datosprueba)
        .expect('Content-Type', /json/)
        .expect(201)
        .then(({body})=>{
            console.log(body.id)
        });
    });

    test("Actualizacion compra", async () => {
        return request(server.app)
        .put(`/api/users/${deporteId}`)
        .set('Authorization', 'Bearer ' +token)
        .send(datosprueba)
        .expect('Content-Type', /json/)
        .expect(201)
        .then(({body})=>{
            console.log("compra actualizada")
        });
    });

    test("Actualizacion equipo", async () => {
        return request(server.app)
        .put(`/api/users/${deporteId}`)
        .set('Authorization', 'Bearer ' +token)
        .send(datosprueba)
        .expect('Content-Type', /json/)
        .expect(201)
        .then(({body})=>{
            console.log("actualizacion de quipo exitosa")
        });
    });
});

describe("Delete /api/deporte/:id", () => {

    test("Eliminacion deporte", async () => {
        return request(server.app)
        .delete(`/api/users/${deporteId}`)
        .set('Authorization', 'Bearer ' +token)
        .expect(410)
    });
});

test("Eliminar equipo", async () => {
    return request(server.app)
    .delete(`/api/users/${deporteId}`)
    .set('Authorization', 'Bearer ' +token)
    .expect(410)
    .then(({body})=>{
        console.log("eliminacion de equipo confirmada")
});
});

    test("Eliminacion compra", async () => {
        return request(server.app)
        .delete(`/api/users/${deporteId}`)
        .set('Authorization', 'Bearer ' +token)
        .expect(410)
        .then(({body})=>{
            console.log("compra eliminada")
    });
});



    

   


