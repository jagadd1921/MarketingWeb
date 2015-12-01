'use strict';

module.exports = {

  loadRoutes: function(app, utils, controllers, passport) {    
    
    app.get('/', function(req, res) {   

      return res.json({"status":"success"});
    });

    
    app.post('/registerEmailJournalist', controllers.registrar.registerEmailJournalist);
    app.post('/registerEmailPolitician', controllers.registrar. registerEmailPolitician); 

    
  }

};