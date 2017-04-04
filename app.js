let express = require('express');
let app = express();
let db = require('diskdb');
db.connect('./DataBase', ['articles'])
let bodyParser = require('body-parser');

app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.listen(app.get('port'), function () {
    console.log("Server started", app.get('port'));
});

app.get('/articles', function (rec, res) {
    res.json(db.articles.find())
});

app.get('/articles/:id', function (req, res) {
    res.json(db.articles.findOne({id: req.params.id}));
});

app.put('/articles', function (req, res) {
    res.json(db.articles.save(req.body));
});

app.delete('/articles/:id', function (req, res) {
    res.json(db.articles.remove({id: req.params.id}));
});

app.patch('/:id', function (req, res) {
    let options = {
        multi: false,
        upsert: false
    };
    let query = db.articles.findOne({id: req.params.id});
    res.json(db.articles.update(query, req.body, options));
});