var http = require('http'),
    path = require('path');

var express = require('express'),
    app = express(),
    server = require('http').createServer(app);

var routes = {
    thing: require('./routes/things')
};

app.configure(function () {
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function () {
    app.use(express.errorHandler());
});

// API endpoints!
app.get('/api/v1/things', routes.thing.listThing);
app.get('/api/v1/things/:id', routes.thing.getThing);
app.post('/api/v1/things', routes.thing.postThing);
app.put('/api/v1/things/:id', routes.thing.updateThing);

server.listen(app.get('port'));