var counter = 0;
var tags = ['business', 'sport', 'culture', 'fashion', 'technology', 'science'];
var articles = [
    {
        id: ++counter,
        title: 'MOONLIGHT MIX-UP STUNS OSCAR CEREMONY',
        createdAt: new Date('2017-02-27'),
        author: 'Eugene',
        content: "Barry Jenkins' Moonlight wins best picture at the Oscars after an error involving wrong envelopes.",
        tags: ['culture']
    },
    {
        id: ++counter,
        title: "WHO lists 'most threatening' superbugs",
        createdAt: new Date('2017-03-27T23:00:00'),
        author: 'Pablo Huanito',
        content: 'Top of the list to find new, effective antibiotic treatments are bacteria that poison the blood.',
        tags: ['science']
    },
    {
        id: ++counter,
        title: 'Sony launches super-slow-motion phone',
        createdAt: new Date('2017-02-27'),
        author: 'Eugene',
        content: "Sony's latest smartphone is capable of filming smooth slow-motion footage at four times the rate possible on Apple models.",
        tags: ['technology', 'science']
    },
    {
        id: ++counter,
        title: 'Aenean aliquam magna id nibh consectetur fringilla.',
        createdAt: new Date('2017-02-27'),
        author: 'Eugene',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.',
        tags: ['business', 'sport', 'culture']
    },
    {
        id: ++counter,
        title: 'Aenean aliquam magna id nibh consectetur fringilla.',
        createdAt: new Date('2017-02-27'),
        author: 'Eugene',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.',
        tags: ['business', 'sport', 'culture']
    },
    {
        id: ++counter,
        title: 'Aenean aliquam magna id nibh consectetur fringilla.',
        createdAt: new Date('2017-02-27'),
        author: 'Eugene',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.',
        tags: ['business', 'sport', 'culture']
    },
    {
        id: ++counter,
        title: 'Aenean aliquam magna id nibh consectetur fringilla.',
        createdAt: new Date('2017-02-27'),
        author: 'Eugene',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.',
        tags: ['business', 'sport', 'culture']
    },
    {
        id: ++counter,
        title: 'Aenean aliquam magna id nibh consectetur fringilla.',
        createdAt: new Date('2017-02-27'),
        author: 'Eugene',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.',
        tags: ['business', 'sport', 'culture']
    },
    {
        id: ++counter,
        title: 'Aenean aliquam magna id nibh consectetur fringilla.',
        createdAt: new Date('2017-02-27'),
        author: 'Eugene',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.',
        tags: ['business', 'sport', 'culture']
    },
    {
        id: ++counter,
        title: 'Aenean aliquam magna id nibh consectetur fringilla.',
        createdAt: new Date('2017-02-27'),
        author: 'Eugene',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.',
        tags: ['business', 'sport', 'culture']
    },
    {
        id: ++counter,
        title: 'Aenean aliquam magna id nibh consectetur fringilla.',
        createdAt: new Date('2017-02-27'),
        author: 'Eugene',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.',
        tags: ['business', 'sport', 'culture']
    },
    {
        id: ++counter,
        title: 'Aenean aliquam magna id nibh consectetur fringilla.',
        createdAt: new Date('2017-02-27'),
        author: 'Eugene',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.',
        tags: ['business', 'sport', 'culture']
    },
    {
        id: ++counter,
        title: 'Aenean aliquam magna id nibh consectetur fringilla.',
        createdAt: new Date('2017-02-27'),
        author: 'Eugene',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.',
        tags: ['business', 'sport', 'culture']
    },
    {
        id: ++counter,
        title: 'Aenean aliquam magna id nibh consectetur fringilla.',
        createdAt: new Date('2017-02-27'),
        author: 'Eugene',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.',
        tags: ['business', 'sport', 'culture']
    },
    {
        id: ++counter,
        title: 'Aenean aliquam magna id nibh consectetur fringilla.',
        createdAt: new Date('2017-02-27'),
        author: 'Eugene',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.',
        tags: ['business', 'sport', 'culture']
    },
    {
        id: ++counter,
        title: 'Aenean aliquam magna id nibh consectetur fringilla.',
        createdAt: new Date('2017-02-27'),
        author: 'Eugene',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.',
        tags: ['business', 'sport', 'culture']
    },
    {
        id: ++counter,
        title: 'Aenean aliquam magna id nibh consectetur fringilla.',
        createdAt: new Date('2017-02-27'),
        author: 'Eugene',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.',
        tags: ['business', 'sport', 'culture']
    },
    {
        id: ++counter,
        title: 'Aenean aliquam magna id nibh consectetur fringilla.',
        createdAt: new Date('2017-02-27'),
        author: 'Eugene',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.',
        tags: ['business', 'sport', 'culture']
    },
    {
        id: ++counter,
        title: 'Aenean aliquam magna id nibh consectetur fringilla.',
        createdAt: new Date('2017-02-27'),
        author: 'Eugene',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.',
        tags: ['business', 'sport', 'culture']
    },
    {
        id: ++counter,
        title: 'Aenean aliquam magna id nibh consectetur fringilla.',
        createdAt: new Date('2017-02-27'),
        author: 'Eugene',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.',
        tags: ['business', 'sport', 'culture']
    },
];

function getArticle(id) {
    if (articles.some(function (item) {
            if (item.id == id) {
                console.log('getArticle: article' + id + ' ' + articles[articles.indexOf(item)].title + ' - was returned')
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
        console.log('validateArticle:  article' + article.id + ' ' + article.title + ' - ok')
        return true;
    }
    console.log('validateArticle:  article' + article.id + ' ' + article.title + " - isn't ok")
    return false;
}

function addArticle(article) {
    if (validateArticle(article)) {
        articles[counter++] = article;
        console.log('addArticle: article' + article.id + ' ' + article.title + ' - was added');
        return true;
    }
    console.log('addArticle: article' + article.id + ' ' + article.title + " - wasn't added");
    return false;
}

function editArticle(id, article) {
    if (articles.some(function (item) {
            if (item.id == id) {
                if (typeof article.title == "string" && article.title.length > 0 && article.title.length <= 100) {
                    articles[articles.indexOf(item)].title = article.title;
                    console.log('editArticle: article' + id + ' - title was edited');
                }else console.log('editArticle: article' + id + " - title wasn't edited");
                if (typeof article.content == "string" && article.content.length > 0) {
                    articles.indexOf(item).content = article.content;
                    console.log('editArticle: article' + id + ' - content was edited');
                }else console.log('editArticle: article' + id + " - content wasn't edited");
                return true;
            }
            return false;
        })) return true;
    console.log('editArticle: article' + id + " - wasn't found");
    return false;
}

function removeArticle(id) {
    if (articles.some(function (item) {
            if (+item.id == +id) {
                articles.splice(articles.indexOf(item), 1);
                console.log('removeArticle: article' + id + ' - was removed');
                return true;
            }
            return false;
        })) return true;
    console.log('removeArticle: article' + id + " - wasn't removed");
    return false;
}

//tests
addArticle({
    id: ++counter,
    title: 'Trump lays out hike in military spending',
    content: 'Donald Trump proposes a $54bn (£43bn) military spending increase - a rise of about 9% on 2016.',
    createdAt: new Date('2017-02-27'),
    author: 'Eugene',
    tags: ['politics']
});

removeArticle(1);
removeArticle(45);
editArticle(2, {title: 'Hello world'});

getArticle(200);
editArticle(6, {title: ''});
articles.forEach(function (item) {
    console.log(item.id + ' ' + item.title);
});