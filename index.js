const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/routes');
require('dotenv').config();
const port = process.env.PORT || 4000;

// ---- ====
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/admin/',routes);
process.on('uncaughtException', (err) => console.log(err));
// ---- ====

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});
