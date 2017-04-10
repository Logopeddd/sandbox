let express = require('express');
let app = express();
let db = require('diskdb');
db.connect('./DataBase', ['articles'])
let bodyParser = require('body-parser');
var counter = 0;
var articles = [
    {
        id: ++counter,
        title: 'MOONLIGHT MIX-UP STUNS OSCAR CEREMONY',
        createdAt: new Date('2017-02-27'),
        author: 'Eugene',
        content: "Barry Jenkins' Moonlight wins best picture at the Oscars after an error involving wrong envelopes.",
        img: './img/mainpromo.jpg',
        tag: ['culture']
    },
    {
        id: ++counter,
        title: "WHO lists 'most threatening' superbugs",
        createdAt: new Date('2017-03-24T23:00:00'),
        author: 'Pahom',
        content: 'Top of the list to find new, effective antibiotic treatments are bacteria that poison the blood.',
        img: './img/tab1.jpg',
        tag: ['science']
    },
    {
        id: ++counter,
        title: "Trump lays out hike in military spending",
        createdAt: new Date('2017-03-24T23:00:00'),
        author: 'Pahom',
        content: 'Donald Trump proposes a $54bn (£43bn) military spending increase - a rise of about 9% on 2016.',
        img: './img/tab2.jpg',
        tag: ['science']
    },
    {
        id: ++counter,
        title: 'Sony launches super-slow-motion phone',
        createdAt: new Date('2017-03-28'),
        author: 'Pahom',
        content: "Sony's latest smartphone is capable of filming smooth slow-motion footage at four times the rate possible on Apple models.",
        img: './img/tab3.jpg',
        tag: ['technology', 'science']
    },
    {
        id: ++counter,
        title: 'Aenean aliquam magna id nibh consectetur fringilla',
        createdAt: new Date('2017-03-29'),
        author: 'Pahom',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
        img: './img/lorem-ipsum.jpg',
        tag: ['business', 'sport', 'culture']
    },
    {
        id: ++counter,
        title: 'Aenean aliquam magna id nibh consectetur fringilla',
        createdAt: new Date('2017-03-30'),
        author: 'Eugene',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
        img: './img/lorem-ipsum.jpg',
        tag: ['business', 'sport', 'culture']
    },
    {
        id: ++counter,
        title: 'Aenean aliquam magna id nibh consectetur fringilla',
        createdAt: new Date('2017-02-27'),
        author: 'Eugene',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
        img: './img/lorem-ipsum.jpg',
        tag: ['business', 'sport', 'culture']
    },
    {
        id: ++counter,
        title: 'Aenean aliquam magna id nibh consectetur fringilla',
        createdAt: new Date('2017-02-27'),
        author: 'Eugene',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
        img: './img/lorem-ipsum.jpg',
        tag: ['business', 'sport', 'culture']
    },
    {
        id: ++counter,
        title: 'Aenean aliquam magna id nibh consectetur fringilla',
        createdAt: new Date('2017-02-27'),
        author: 'Eugene',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
        img: './img/lorem-ipsum.jpg',
        tag: ['business', 'sport', 'culture']
    },
    {
        id: ++counter,
        title: 'Aenean aliquam magna id nibh consectetur fringilla',
        createdAt: new Date('2017-02-27'),
        author: 'Eugene',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
        img: './img/lorem-ipsum.jpg',
        tag: ['business', 'sport', 'culture']
    },
    {
        id: ++counter,
        title: 'Aenean aliquam magna id nibh consectetur fringilla',
        createdAt: new Date('2017-02-27'),
        author: 'Eugene',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
        img: './img/lorem-ipsum.jpg',
        tag: ['business', 'sport', 'culture']
    },
    {
        id: ++counter,
        title: 'Aenean aliquam magna id nibh consectetur fringilla',
        createdAt: new Date('2017-02-27'),
        author: 'Eugene',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
        img: './img/lorem-ipsum.jpg',
        tag: ['business', 'sport', 'culture']
    },
    {
        id: ++counter,
        title: 'Aenean aliquam magna id nibh consectetur fringilla',
        createdAt: new Date('2017-02-27'),
        author: 'Eugene',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
        img: './img/lorem-ipsum.jpg',
        tag: ['business', 'sport', 'culture']
    },
    {
        id: ++counter,
        title: 'Aenean aliquam magna id nibh consectetur fringilla',
        createdAt: new Date('2017-02-27'),
        author: 'Eugene',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
        img: './img/lorem-ipsum.jpg',
        tag: ['business', 'sport', 'culture']
    },
    {
        id: ++counter,
        title: 'Aenean aliquam magna id nibh consectetur fringilla',
        createdAt: new Date('2017-02-27'),
        author: 'Eugene',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
        img: './img/lorem-ipsum.jpg',
        tag: ['business', 'sport', 'culture']
    },
    {
        id: ++counter,
        title: 'Aenean aliquam magna id nibh consectetur fringilla',
        createdAt: new Date('2017-02-27'),
        author: 'Eugene',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
        img: './img/lorem-ipsum.jpg',
        tag: ['business', 'sport', 'culture']
    },
    {
        id: ++counter,
        title: 'Aenean aliquam magna id nibh consectetur fringilla',
        createdAt: new Date('2017-02-27'),
        author: 'Eugene',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
        img: './img/lorem-ipsum.jpg',
        tag: ['business', 'sport', 'culture']
    },
    {
        id: ++counter,
        title: 'Aenean aliquam magna id nibh consectetur fringilla',
        createdAt: new Date('2017-02-27'),
        author: 'Eugene',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
        img: './img/lorem-ipsum.jpg',
        tag: ['business', 'sport', 'culture']
    },
    {
        id: ++counter,
        title: 'Aenean aliquam magna id nibh consectetur fringilla',
        createdAt: new Date('2017-02-27'),
        author: 'Eugene',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
        img: './img/lorem-ipsum.jpg',
        tag: ['business', 'sport', 'culture']
    },
    {
        id: ++counter,
        title: 'Aenean aliquam magna id nibh consectetur fringilla',
        createdAt: new Date('2017-02-27'),
        author: 'Eugene',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
        img: './img/lorem-ipsum.jpg',
        tag: ['business', 'sport', 'culture']
    },
    {
        id: ++counter,
        title: 'Aenean aliquam magna id nibh consectetur fringilla',
        createdAt: new Date('2017-02-27'),
        author: 'Eugene',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
        img: './img/lorem-ipsum.jpg',
        tag: ['business', 'sport', 'culture']
    }
];

app.set('port', (process.env.PORT || 3000));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

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