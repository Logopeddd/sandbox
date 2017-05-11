let express = require('express');
let app = express();
let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;
let users = require('./db.js').users;
let articles = require('./db.js').articles;
let session = require('express-session');
let sessionStore = require('connect-mongo')(session);
let store = new sessionStore({url: 'mongodb://localhost/1'});
// let db = require('diskdb');
// db.connect('./DataBase', ['articles']);
//
// const arts = db.articles.find();
// arts.forEach(item => {
//     delete item.id;
//     delete item._id;
//     new articles(item).save(err => !err ? console.log('added') : console.log('err'));
// })

let bodyParser = require('body-parser');

app.set('port', (process.env.PORT || 3000));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    store: store
}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => done(null, user));

passport.deserializeUser((user, done) => {
    const error = user ? null : new Error('deserialize');
    done(error, user)
});

passport.use('login', new LocalStrategy({
        passReqToCallback: true
    },
    (req, username, password, done) => {
    users.findOne({ username: username }, (err, user) => {
            if (!user) {
                console.log('User Not Found with username ' + username);
                return done(null, false, { message: 'user not found' });
            }
            if (password !== user.password) {
                console.log('Invalid Password');
                return done(null, false, { message: 'incorrect password' });
            }
            return done(null, user);
        });
    })
);

app.post('/login', passport.authenticate('login'), (req, res) => res.sendStatus(200));

app.get('/logout', (req, res) => {
    req.logout();
    res.sendStatus(200);
});

app.get('/username', (req, res) => req.user ? res.send(req.user.username) : res.sendStatus(401));

app.get('/articles', function (req, res) {
    articles.find((err, data) => !err ? res.json(data) : res.sendStatus(500));
});

app.get('/articles/:id', function (req, res) {
    articles.findById(req.body.id, (err, data) => !err ? res.json(data) : res.sendStatus(500));
});

app.patch('/articles', function (req, res) {
    articles.findByIdAndUpdate(req.body.id, {$set: req.body}, err => !err ? res.sendStatus(200) : res.sendStatus(500));
});

app.delete('/articles/:id', function (req, res) {
    articles.findByIdAndRemove(req.params.id, err => !err ? res.sendStatus(200) : res.sendStatus(500));
});

app.post('/articles', (req, res) => {
    new articles(req.body).save(err => !err ? res.sendStatus(200) : res.sendStatus(500));
});

app.listen(app.get('port'), function () {
    console.log("Server started", app.get('port'));
});