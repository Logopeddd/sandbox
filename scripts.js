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
    if (+id <= counter) {
        console.log(articles[+id - 1])
        return articles[+id - 1];
    }
    return null;
}

function validateArticle(article) {
    if (typeof article.id == "number" &&
        typeof article.createdAt == "object" &&
        typeof article.tags == "object" && article.tags.length >= 1 && article.tags.length <= 5 &&
        typeof article.author == "string" && article.author.length > 0 &&
        typeof article.content == "string" && article.content.length > 0 &&
        typeof article.title == "string" && article.title.length > 0 && article.title.length <= 100)
        return true;
    return false;
}

function addArticle(article) {
    if (validateArticle(article)) {
        articles[counter++] = article;
        return true;
    }
    return false;
}
function editArticle(id, article) {
    if (+id > counter)
        return false;
    if (typeof article.title == "string" && article.title.length > 0 && article.title.length <= 100) {
        articles[+id - 1].title = article.title;
    }
    if (typeof article.content == "string" && article.content.length > 0) {
        articles[+id - 1].content = article.content;
    }
    return true;
}

function removeArticle(id) {
    if (+id > counter)
        return false;
    articles.splice(+id - 1, 1);
    return true;
}

addArticle({
    id: counter++,
    title: 'Trump lays out hike in military spending',
    content: 'Donald Trump proposes a $54bn (£43bn) military spending increase - a rise of about 9% on 2016.',
    createdAt: new Date('2017-02-27'),
    author: 'Eugene',
    tags: ['politics']
});
articles.forEach(function (item) {
    console.log(item.id + ' ' + item.title);
});