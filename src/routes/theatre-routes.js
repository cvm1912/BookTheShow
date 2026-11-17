const { Router } = require("express");
const theatreController = require('../controllers/theatre-controller');
const { validateCreateTheatreRequest } = require('../middlewares/theatre-middleware');

const theatreRoutes = Router();

theatreRoutes.post('/theatre', validateCreateTheatreRequest, theatreController.createTheatre);
theatreRoutes.get('/theatre', theatreController.fetchTheatres);
theatreRoutes.get('/theatre/:id', theatreController.getTheatreById);
theatreRoutes.patch('/theatre/:id', theatreController.updateTheatre);
theatreRoutes.delete('/theatre/:id', theatreController.deleteTheatre);

module.exports = theatreRoutes;
