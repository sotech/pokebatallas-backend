const dotenv = require('dotenv');
dotenv.config()
require('./src/utils/dbConnection');
const cors = require('cors');
const express = require('express')
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 3000;
const usuarioRutas = require('./src/routes/usuarioRutas');

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/usuario", usuarioRutas);

app.listen(port, () => {
    console.log("Servidor Iniciado en puerto " + port);
})