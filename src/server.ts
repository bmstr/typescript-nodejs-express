import * as express from 'express';

class Server {

    public express: express.Application;

    constructor() {
        this.express = express();
        this.routes();
    }

    private routes(): void {
        let router = express.Router();

        router.get('/', (req, res, next) => {
            res.send('Hello, BS');
        });
        this.express.use('/', router);
    }
}

export default new Server().express;
