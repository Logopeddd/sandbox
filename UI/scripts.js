var counter = 0;
var tags = ['business', 'sport', 'culture', 'fashion', 'technology', 'science'];
var articles = [
    {
        id: ++counter,
        title: 'MOONLIGHT MIX-UP STUNS OSCAR CEREMONY',
        createdAt: new Date('2017-02-27'),
        author: 'Eugene',
        content: "Barry Jenkins' Moonlight wins best picture at the Oscars after an error involving wrong envelopes.",
        img: './img/mainpromo.jpg',
        tags: ['culture']
    },
    {
        id: ++counter,
        title: "WHO lists 'most threatening' superbugs",
        createdAt: new Date('2017-03-24T23:00:00'),
        author: 'Pahom',
        content: 'Top of the list to find new, effective antibiotic treatments are bacteria that poison the blood.',
        img: './img/tab1.jpg',
        tags: ['science']
    },
        {
            id: ++counter,
            title: "Trump lays out hike in military spending",
            createdAt: new Date('2017-03-24T23:00:00'),
            author: 'Pahom',
            content: 'Donald Trump proposes a $54bn (£43bn) military spending increase - a rise of about 9% on 2016.',
            img: './img/tab2.jpg',
            tags: ['science']
        },
    {
        id: ++counter,
        title: 'Sony launches super-slow-motion phone',
        createdAt: new Date('2017-03-28'),
        author: 'Pahom',
        content: "Sony's latest smartphone is capable of filming smooth slow-motion footage at four times the rate possible on Apple models.",
        img:'./img/tab3.jpg',
        tags: ['technology', 'science']
    },
    {
        id: ++counter,
        title: 'Aenean aliquam magna id nibh consectetur fringilla',
        createdAt: new Date('2017-03-29'),
        author: 'Pahom',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
        img:'./img/lorem-ipsum.jpg',
        tags: ['business', 'sport', 'culture']
    },
    {
        id: ++counter,
        title: 'Aenean aliquam magna id nibh consectetur fringilla',
        createdAt: new Date('2017-03-30'),
        author: 'Eugene',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
        img:'./img/lorem-ipsum.jpg',
        tags: ['business', 'sport', 'culture']
    },
    {
        id: ++counter,
        title: 'Aenean aliquam magna id nibh consectetur fringilla',
        createdAt: new Date('2017-02-27'),
        author: 'Eugene',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
        img:'./img/lorem-ipsum.jpg',
        tags: ['business', 'sport', 'culture']
    },
    {
        id: ++counter,
        title: 'Aenean aliquam magna id nibh consectetur fringilla',
        createdAt: new Date('2017-02-27'),
        author: 'Eugene',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
        img:'./img/lorem-ipsum.jpg',
        tags: ['business', 'sport', 'culture']
    },
    {
        id: ++counter,
        title: 'Aenean aliquam magna id nibh consectetur fringilla',
        createdAt: new Date('2017-02-27'),
        author: 'Eugene',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
        img:'./img/lorem-ipsum.jpg',
        tags: ['business', 'sport', 'culture']
    },
    {
        id: ++counter,
        title: 'Aenean aliquam magna id nibh consectetur fringilla',
        createdAt: new Date('2017-02-27'),
        author: 'Eugene',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
        img:'./img/lorem-ipsum.jpg',
        tags: ['business', 'sport', 'culture']
    },
    {
        id: ++counter,
        title: 'Aenean aliquam magna id nibh consectetur fringilla',
        createdAt: new Date('2017-02-27'),
        author: 'Eugene',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
        img:'./img/lorem-ipsum.jpg',
        tags: ['business', 'sport', 'culture']
    },
    {
        id: ++counter,
        title: 'Aenean aliquam magna id nibh consectetur fringilla',
        createdAt: new Date('2017-02-27'),
        author: 'Eugene',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
        img:'./img/lorem-ipsum.jpg',
        tags: ['business', 'sport', 'culture']
    },
    {
        id: ++counter,
        title: 'Aenean aliquam magna id nibh consectetur fringilla',
        createdAt: new Date('2017-02-27'),
        author: 'Eugene',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
        img:'./img/lorem-ipsum.jpg',
        tags: ['business', 'sport', 'culture']
    },
    {
        id: ++counter,
        title: 'Aenean aliquam magna id nibh consectetur fringilla',
        createdAt: new Date('2017-02-27'),
        author: 'Eugene',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
        img:'./img/lorem-ipsum.jpg',
        tags: ['business', 'sport', 'culture']
    },
    {
        id: ++counter,
        title: 'Aenean aliquam magna id nibh consectetur fringilla',
        createdAt: new Date('2017-02-27'),
        author: 'Eugene',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
        img:'./img/lorem-ipsum.jpg',
        tags: ['business', 'sport', 'culture']
    },
    {
        id: ++counter,
        title: 'Aenean aliquam magna id nibh consectetur fringilla',
        createdAt: new Date('2017-02-27'),
        author: 'Eugene',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
        img:'./img/lorem-ipsum.jpg',
        tags: ['business', 'sport', 'culture']
    },
    {
        id: ++counter,
        title: 'Aenean aliquam magna id nibh consectetur fringilla',
        createdAt: new Date('2017-02-27'),
        author: 'Eugene',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
        img:'./img/lorem-ipsum.jpg',
        tags: ['business', 'sport', 'culture']
    },
    {
        id: ++counter,
        title: 'Aenean aliquam magna id nibh consectetur fringilla',
        createdAt: new Date('2017-02-27'),
        author: 'Eugene',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
        img:'./img/lorem-ipsum.jpg',
        tags: ['business', 'sport', 'culture']
    },
    {
        id: ++counter,
        title: 'Aenean aliquam magna id nibh consectetur fringilla',
        createdAt: new Date('2017-02-27'),
        author: 'Eugene',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
        img:'./img/lorem-ipsum.jpg',
        tags: ['business', 'sport', 'culture']
    },
    {
        id: ++counter,
        title: 'Aenean aliquam magna id nibh consectetur fringilla',
        createdAt: new Date('2017-02-27'),
        author: 'Eugene',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
        img:'./img/lorem-ipsum.jpg',
        tags: ['business', 'sport', 'culture']
    },
    {
        id: ++counter,
        title: 'Aenean aliquam magna id nibh consectetur fringilla',
        createdAt: new Date('2017-02-27'),
        author: 'Eugene',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
        img:'./img/lorem-ipsum.jpg',
        tags: ['business', 'sport', 'culture']
    }
];

function getArticle(id) {
    if (articles.some(function (item) {
            if (item.id == id) {
                console.log('getArticle: article' + id + ' ' + articles[articles.indexOf(item)].title + articles[articles.indexOf(item)].author + ' - was returned')
                return articles[articles.indexOf(item)];
            }
            return false;
        }))return true;
    console.log('getArticle: article' + id + ' - not found')
    return null;
}

function validateArticle(article) {
    if (typeof article.id == "number" &&
        typeof article.createdAt == "object" &&
        typeof article.tags == "object" && article.tags.length >= 1 && article.tags.length <= 5 &&
        typeof article.author == "string" && article.author.length > 0 &&
        typeof article.content == "string" && article.content.length > 0 &&
        typeof article.title == "string" && article.title.length > 0 && article.title.length <= 100) {
        console.log('validateArticle:  article' + article.id + ' ' + article.title + article.author + ' - ok')
        return true;
    }
    console.log('validateArticle:  article' + article.id + ' ' + article.title + article.author + " - isn't ok")
    return false;
}

function addArticle(article) {
    if (validateArticle(article)) {
        articles[counter++] = article;
        console.log('addArticle: article' + article.id + ' ' + article.title + article.author + ' - was added');
        return true;
    }
    console.log('addArticle: article' + article.id + ' ' + article.title + article.author + " - wasn't added");
    return false;
}

function editArticle(id, article) {
    if (articles.some(function (item) {
            if (item.id == id) {
                if (typeof article.title == "string" && article.title.length > 0 && article.title.length <= 100) {
                    articles[articles.indexOf(item)].title = article.title;
                    console.log('editArticle: article' + id + ' - title was edited');
                } else console.log('editArticle: article' + id + " - title wasn't edited");
                if (typeof article.content == "string" && article.content.length > 0) {
                    articles.indexOf(item).content = article.content;
                    console.log('editArticle: article' + id + ' - content was edited');
                } else console.log('editArticle: article' + id + " - content wasn't edited");
                return true;
            }
            return false;
        })) return true;
    console.log('editArticle: article' + id + " - wasn't found");
    return false;
}

function removeArticle(id) {
    if (articles.some(function (item) {
            if (item.id == id) {
                articles.splice(articles.indexOf(item), 1);
                console.log('removeArticle: article' + id + ' - was removed');
                return true;
            }
            return false;
        })) return true;
    console.log('removeArticle: article' + id + " - not found");
    return false;
}

function getArticles(skip, top, filterConfig) {
    if (skip == undefined) {
        skip = 0;
    }
    if (skip > articles.length) {
        return null;
    }
    if (top == undefined) {
        top = 10;
    }
    var filtered = articles.slice(skip, top + skip);
    if (typeof filterConfig.author == "string" && filterConfig.author.length > 0) {
        filtered = filtered.filter(function (item) {
            return (filterConfig.author == item.author);
        });
    }

    if (typeof filterConfig.createdAt == "object") {
        filtered = filtered.filter(function (item) {
            return (filterConfig.createdAt.getFullYear() == item.createdAt.getFullYear() &&
            filterConfig.createdAt.getMonth() == item.createdAt.getMonth() &&
            filterConfig.createdAt.getDate() == item.createdAt.getDate());
        });
    }

    filtered.sort(function (a, b) {
        return b.createdAt - a.createdAt;
    });
    console.log('getArticles:');
    filtered.forEach(function (item) {
        console.log(item.id + ' ' + item.title);
    });

}

/*-------------------------------tests-------------------------------*/
// addArticle({
//     id: ++counter,
//     title: 'Trump lays out hike in military spending',
//     content: 'Donald Trump proposes a $54bn (£43bn) military spending increase - a rise of about 9% on 2016.',
//     createdAt: new Date('2017-02-27'),
//     author: 'Eugene',
//     tags: ['politics']
// });
//
// removeArticle(1);
// removeArticle(45);
// editArticle(2, {title: 'Hello world'});
// getArticle(2);
// editArticle(6, {title: ''});
// articles.forEach(function (item) {
//     console.log(item.id + ' ' + item.title + ' ' + item.author);
//
// });
//getArticles(0, 4, {author: 'Pahom'});
// function addArticle(article) {
//     var content = document.getElementById('content');
//     var tab = document.createElement('DIV');
//     tab.innerHTML = '<div class="tab"><h2 class="button">'+article.title+'</h2> <p>'+article.content+'</p> <span class="author">Eugene, 27.02.2017</span></div>';
//     content.appendChild(tab);
// }
//addArticle(articles[0]);

function showArticles(){
    var content = document.getElementById('content');

    articles.forEach(function addArticle(item){
        var tab = document.createElement('div');
        tab.innerHTML = '<div class="tab "><h2 class="button">'+item.title+'</h2><img src='+item.img+' width="300" height="200"><p>'+item.content+'</p> <span class="author">'+item.author+', '+item.createdAt.toDateString()+'</span></div>';
        content.appendChild(tab.firstChild);
    });
    content.firstElementChild.classList.add("main");
    var tab = document.createElement('div');
    tab.innerHTML = '<div class="tab pagination"><a class="button">Show more...</a> </div>';
    content.appendChild(tab.firstChild);
}
showArticles();