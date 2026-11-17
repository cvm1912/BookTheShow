const { Router } = require("express");
const theatreController = require('../controllers/theatre-controller');
const theatreMiddleware = require('../middlewares/theatre-middleware')

const theatreRoutes = Router();

theatreRoutes.post('/theatre',theatreMiddleware.validateCreateTheatreRequest, theatreController.create);

module.exports = theatreRoutes;
