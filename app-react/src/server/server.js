const express = require('express');
const app = express();
app.use(express.json());

var cors = require('cors');
app.use(cors());

const routes = require('./routes/index');
app.use(routes);

require("./base/mongo");
const port = process.env.PORT || 3001;

app.listen(port, () => { return console.log('API de serviços executando na porta ' + port); });