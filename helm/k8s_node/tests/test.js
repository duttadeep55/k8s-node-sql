// Simple async test for HTTP 200 response code using supertest
'use strict';

var request = require("supertest"),
    app = require("../app").getApp;

describe('GET /health', function(){
  it('expects HTTP response 200', function(done){
    request(app)
     .get('/health')
	 .expect(200, done); 
  });
});