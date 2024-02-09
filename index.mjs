console.log("a");
import Server from 'bare-server-node';
import http from 'http';
import nodeStatic from 'node-static';


const bare =  new Server('/bare/', '');
const serve = new nodeStatic.Server('static/');

const server = http.createServer();

server.on('request', (request, response) => {
    if (bare.route_request(request, response)) return true;
    serve.serve(request, response);
});

server.on('upgrade', (req, socket, head) => {
	if(bare.route_upgrade(req, socket, head))return;
	socket.end();
});
// secret is 8443
// vizard is 3000
server.listen(process.env.PORT || 8443 ,'0.0.0.0');
