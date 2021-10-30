var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
const chalk = require('chalk');
const db = require('rethinkdb');

var port = 80;
var allowTraffic = false;

//GENERAL HTML
app.get('/', (req, res) => {res.sendFile(__dirname + '/CLIENT/HTML/index.html');});
app.get('/samples', (req, res) => {res.sendFile(__dirname + '/CLIENT/HTML/samples.html');});
app.get('/packs', (req, res) => {res.sendFile(__dirname + '/CLIENT/HTML/packs.html');});
app.get('/register', (req, res) => {res.sendFile(__dirname + '/CLIENT/HTML/register.html');});

//PUBLIC LISTENER
app.use(express.static('CLIENT'));
app.get('*', (req, res) => {res.sendFile(__dirname + '/CLIENT/HTML/404.html', 404);});

io.on('connection', (socket) => {
    if(allowTraffic == true){
        
        //EVENTS
        console.log('USER CONNECTED!');

    }
});

//SERVER START
server.listen(port, () => {
    console.log(chalk.grey('[' + chalk.cyan('START') + ']Successfully connected on port: ' + chalk.cyan(port)));
    /*db.connect({ 
        host: 'localhost', 
        port: '28015', 
        db: 'Rift'}
    , function(err, conn) {
        global.conn = conn;
        if(err)console.log(chalk.red(err));
        console.log(chalk.grey('[' + chalk.yellow('DATA') + ']Logged in to Database: ' + chalk.yellow(conn.db) + ' Address: ' + chalk.yellow(conn.host + ':' + conn.port)));
        allowTraffic = true;
    });*/
    allowTraffic = true;
});