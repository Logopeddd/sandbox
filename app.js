let express = require('express');
let app = express();
let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;
let session = require('express-session');
let sessionStore = require('connect-diskdb')(session);
let store = new sessionStore({ path: './DataBase', name: 'sessions' });
let db = require('diskdb');

db.connect('./DataBase', ['articles','users']);
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
        const user = db.users.findOne({ username: username });
        if (!user) {
            console.log('User Not Found with username ' + username);
            return done(null, false, { message: 'user not found' });
        }
        if (password !== user.password) {
            console.log('Invalid Password');
            return done(null, false, { message: 'incorrect password' });
        }
        return done(null, user);
    })
);

app.post('/login', passport.authenticate('login'), (req, res) => res.sendStatus(200));

app.get('/logout', (req, res) => {
    req.logout();
    res.sendStatus(200);
});

app.get('/username', (req, res) => req.user ? res.send(req.user.username) : res.sendStatus(401));

app.get('/articles', function (req, res) {
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

app.patch('/articles', function (req, res) {
    db.articles.remove({id: req.body.id});
    res.json(db.articles.save(req.body));
});

app.listen(app.get('port'), function () {
    console.log("Server started", app.get('port'));
});