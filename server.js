const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const htmlRouter = require('./app/routing/htmlRoutes');
const apiRouter = require('./app/routing/apiRoutes');

const port = process.env.PORT || '3000';

const app = express();

app.use(bodyParser.json());

app.use('/html', htmlRouter);
app.use('/api', apiRouter);

app.listen(port, () => {
  console.log('App listening on port 3000!')
})