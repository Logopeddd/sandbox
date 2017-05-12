const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const SessionStore = require('connect-mongo')(session);
const LocalStrategy = require('passport-local').Strategy;
const users = require('./db.js').users;
const Articles = require('./db.js').articles;

const app = express();
const store = new SessionStore({ url: 'mongodb://localhost/1' });

app.set('port', (process.env.PORT || 3000));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    store: store,
}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => done(null, user));

passport.deserializeUser((user, done) => {
    const error = user ? null : new Error('deserialize');
    done(error, user);
});

passport.use('login', new LocalStrategy({ passReqToCallback: true },
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
    }));

app.post('/login', passport.authenticate('login'), (req, res) => res.sendStatus(200));

app.get('/logout', (req, res) => {
    req.logout();
    res.sendStatus(200);
});

app.get('/username', (req, res) => req.user ? res.send(req.user.username) : res.sendStatus(401));

app.get('/articles', (req, res) => {
    Articles.find((err, data) => !err ? res.json(data) : res.sendStatus(500));
});

app.get('/articles/:id', (req, res) => {
    Articles.findById(req.body.id, (err, data) => !err ? res.json(data) : res.sendStatus(500));
});

app.patch('/articles', (req, res) => {
    Articles.findByIdAndUpdate(req.body._id, { $set: req.body }, err => !err ? res.sendStatus(200) : res.sendStatus(500));
});

app.delete('/articles/:id', (req, res) => {
    Articles.findByIdAndRemove(req.params.id, (err) => {
        !err ? res.sendStatus(200) : res.sendStatus(500);
    });
});

app.post('/articles', (req, res) => {
    new Articles(req.body).save(err => !err ? res.sendStatus(200) : res.sendStatus(500));
});

app.listen(app.get('port'), () => {
    console.log('Server started', app.get('port'));
});
