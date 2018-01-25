const router = require('express').Router();
const controller = require('../controllers/controller');

router.post('/consult', controller.consult);
router.post('/compare', controller.compare);

module.exports = router;
