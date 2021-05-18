const swaggerUi = require('swagger-ui-express');
var swaggerJSDoc = require('swagger-jsdoc');

module.exports.setup = (router) => {
  var swaggerDefinition = {
    info: {
        title: 'Node Swagger API',
        version: '2.0',
        description: 'Card-Bind',
    },

    host: '127.0.0.1:3000',
    basePath: '/api/v1',
    schemes: ['http'],
    consumes: ['application/json', 'application/xml'],
    produces: ['application/json', 'application/xml']
};

  var options = {
    swaggerDefinition: swaggerDefinition,
    apis: ['./controllers/helpers/swagger_apis.js']
  };

  router.use('/swagger/ui', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));
};
