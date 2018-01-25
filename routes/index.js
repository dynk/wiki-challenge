const router = require('express').Router();
const controller = require('../controllers/controller');

router.get('/consult', controller.consult);
router.post('/compare', controller.compare);

module.exports = router;
