var request = require('supertest'),
  app = require('../app.js');

describe('Gestión de vuelo',function(){

  describe('PUT creado',function(){
    it('should create',function(done){
      request(app)
        .put('/vuelo/alicante/cielo/1/2')
        .expect('Content-Type',/json/)
        .expect(200,done);
    });
  });


  describe('Nuevo billete',function(){
      it('Should create',function(done){
        request(app)
        .put('/billete/persona/o/d/1/2')
        .expect('Content-Type',/json/)
        .expect(200,done);
      });
    });


  describe('Muestra',function(){
    it('should show messages',function(done){
        request(app)
        .get('/vuelos')
        .expect('Content-Type',/json/)
        .expect(200,done);
    });
  });

  describe('Existe',function(){
    it('should show fly',function(done){
      request(app)
      .get('/vuelo/alicante/cielo/1/2')
      .expect('Content-Type',/json/)
      .expect(200,done);
    })
  });

});
