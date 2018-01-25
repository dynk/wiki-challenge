
const app = require('express')();
const port = 3000;
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');



process.on('unhandledRejection', (reason, p) => {
  console.log(`Possible unhandles rejection ${reason}, ${p}`)
});
app.use(bodyParser.json());
app.use(cors());
app.use(`/`, require('./routes'));


app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
