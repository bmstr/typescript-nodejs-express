import * as http from 'http';

import App from './server';

const port = 3000;
App.set('port', port);

const server = http.createServer(App);

server.listen(port, function() {
    console.log('Server port: ' + port);
});
