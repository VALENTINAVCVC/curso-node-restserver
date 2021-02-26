const express = require('express')
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.PORT = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        //middlewares
        this.middlewares();

        //rutas aplicacion
        this.routes();
    }

    middlewares() {
        //CORS
        this.app.use(cors());

        //lectura y parseo del body
        this.app.use(express.json());

        //direccotio publico
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }

    listen() {
        this.app.listen(this.PORT, () => {
            console.log('SERVIDOR CORRIENDO EN PUERTO ', this.PORT);
        });
    }
}

module.exports = Server;