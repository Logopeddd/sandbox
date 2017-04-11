var articleModel = (function () {
    var tags = ['business', 'sport', 'culture', 'fashion', 'technology', 'science'];
    var articles = [];

    function replaceArticles() {
        articles = JSON.parse(dbModel.getArray());
        for (var i = 0; i < articles.length; i++)
            articles[i].createdAt = new Date(articles[i].createdAt);
        articles.sort((a, b) => b.createdAt - a.createdAt);
    }

    function setLocalUser(username) {
        localStorage.setItem("user", username);
    }

    function getArticle(id) {
        var article = articles.filter((item) => {
            return item.id == id;
        })[0];
        console.log('getArticle: article' + id + ' - was returned');
        return article;
    }

    function getArticlesLength() {
        return articles.length;
    }

    function getArticlesAt(index) {
        return articles[index];
    }

    function validateArticle(article) {
        if (true/*typeof article.id == "number" &&
         typeof article.createdAt == "object" &&
         typeof article.tag == "object" && article.tag.length >= 1 && article.tag.length <= 5 &&
         typeof article.author == "string" && article.author.length > 0 &&
         typeof article.content == "string" && article.content.length > 0 &&
         typeof article.title == "string" && article.title.length > 0 && article.title.length <= 100*/) {
            article.id = article.createdAt.toString()+article.author;
            console.log('validateArticle:  article' + article.id + ' ' + article.title + article.author + ' - ok');
            return true;
        }
        console.log('validateArticle:  article' + article.id + ' ' + article.title + article.author + " - isn't ok");
        return false;
    }

    function addArticle(article) {
        if (validateArticle(article)) {
            dbModel.addArticle(article);
            replaceArticles();
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
                        articles[articles.indexOf(item)].content = article.content;
                        console.log('editArticle: article' + id + ' - content was edited');
                    } else console.log('editArticle: article' + id + " - content wasn't edited");
                    if (typeof article.img == "string" && article.img.length > 0) {
                        articles[articles.indexOf(item)].img = article.img;
                        console.log('editArticle: article' + id + ' - img was edited');
                    } else console.log('editArticle: article' + id + " - img wasn't edited");
                    return true;
                }
                return false;
            })) {
            dbModel.editArticle(article);
            return true;
        }
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
        skip = skip || 0;
        top = top || 10;
        if (skip > articles.length) {
            return null;
        }
        var filtered = articles.slice(skip, top + skip);
        if (typeof filterConfig.author == "string" && filterConfig.author.length > 0) {
            filtered = filtered.filter(function (item) {
                return (filterConfig.author == item.author);
            });
        }

        if (filterConfig.createdAt instanceof Date) {
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

    return {
        articles,
        tags,
        replaceArticles,
        setLocalUser,
        getArticlesLength,
        getArticlesAt,
        getArticle,
        validateArticle,
        addArticle,
        editArticle,
        removeArticle,
        getArticles
    };
}());
var articleRendering = (function () {
    function showArticle(item) {
        var news = document.getElementById('news');
        var tab = document.createElement('div');
        tab.innerHTML = "<div class='tab resize' data-id='"+item.id+"'><h2 onclick = 'articleRendering.detailView(this.parentNode)' class='button'>" + item.title + "</h2><img src=" + item.img + "><p>" + item.content + "</p> <span class='author'>" + item.author + ", " + item.createdAt.toDateString() + "</span></div>";
        news.appendChild(tab.firstChild);
    }

    function showFrom(first) {
        var news = document.getElementById('news');
        if (news.lastChild.classList && news.lastChild.classList.contains("pagination")) {
            news.removeChild(news.lastChild);
        }
        var i;
        for (i = first; i < articleModel.getArticlesLength() && i < first + 12; i++) {
            showArticle(articleModel.getArticlesAt(i));
        }
        news.firstElementChild.classList.add("main");
        if (i < articleModel.getArticlesLength()) {
            var tab = document.createElement('div');
            tab.innerHTML = '<div class="tab resize pagination"><a onclick="articleRendering.showMore()" class="button">Show more...</a> </div>';
            news.appendChild(tab.firstChild);
        }
    }

    function show() {
        var news = document.getElementById('news');
        while (news.firstElementChild)
            news.removeChild(news.firstElementChild);
        showFrom(0);
    }

    function showMore() {
        var news = document.getElementById('news');
        showFrom(news.childNodes.length - 2);
    }

    function logIn() {

        var glass = document.getElementById("glass");
        glass.classList.remove('invisible');
    }

    function signIn() {
        document.getElementById("login-button").classList.add('invisible');

        articleModel.setLocalUser(document.getElementById('login-form').login.value);
        var username = document.getElementById("username");
        username.firstElementChild.textContent = "HI, " + localStorage.getItem("user") + ' |';
        username.classList.remove('invisible');
        btnCheck();
        document.getElementById('glass').classList.add('invisible');
    }

    function showAddPage() {
        document.getElementById('edit-article').classList.add('invisible');
        document.getElementById('article-tab').classList.add('invisible');
        document.getElementById('news').classList.add('invisible');
        document.getElementById('add-form').heading.value = "";
        document.getElementById('add-form').image.value = "";
        document.getElementById('add-form').paragraph.value = "";
        document.getElementById('add-article').classList.remove('invisible');
    }

    function showEditPage(id) {
        var item = articleModel.getArticle(id);
        document.getElementById('article-tab').classList.add('invisible');
        document.getElementById('edit-form').heading.value = item.title;
        document.getElementById('edit-form').image.value = item.img;
        document.getElementById('edit-form').paragraph.value = item.content;
        document.getElementById('edit-form').setAttribute('action', "javascript:articleRendering.edit('" + id + "')");
        document.getElementById('edit-article').classList.remove('invisible');
    }

    function main() {
        document.getElementById('article-tab').classList.add('invisible');
        document.getElementById('add-article').classList.add('invisible');
        document.getElementById('edit-article').classList.add('invisible');
        document.getElementById('news').classList.remove('invisible');
        show();
    }

    function detailView(elem) {
        document.getElementById('add-article').classList.add('invisible');
        var item = articleModel.getArticle(elem.dataset.id);
        var tab = document.getElementById('article-tab');
        tab.innerHTML = '<h1>' + item.title + '</h1><img src=' + item.img + '><p>' + item.content + '</p> <span class="author">' + item.author + ', ' + item.createdAt.toDateString() + '</span> <input class = "admin-button" type="button" onclick="articleRendering.showEditPage(\'' + item.id + '\')" value="Редактировать">';
        document.getElementById('news').classList.add('invisible');
        btnCheck();
        tab.classList.remove('invisible');
    }

    function add() {
        articleModel.addArticle({
            title: document.getElementById('add-form').heading.value,
            content: document.getElementById('add-form').paragraph.value,
            createdAt: new Date(),
            author: localStorage.getItem("user"),
            img: document.getElementById('add-form').image.value,
            tag: ['politics'],
        });
        main();
    }

    function edit(id) {
        var article = articleModel.getArticle(id);
        article.title = document.getElementById('edit-form').heading.value;
        article.content = document.getElementById('edit-form').paragraph.value;
        article.img = document.getElementById('edit-form').image.value;
        // article.tag =
        articleModel.editArticle(id, article);
        main();
    }

    function btnCheck() {
        if (localStorage.getItem("user")) {
            document.getElementById("login-button").classList.add('invisible');
            var username = document.getElementById("username");
            username.firstElementChild.textContent = "HI, " + localStorage.getItem("user") + ' |';
            username.classList.remove('invisible');
            var buttons = document.getElementsByClassName('admin-button');
            for (var i = 0; i < buttons.length; i++)
                buttons[i].style.visibility = 'visible'
        }
    }


    function hide(event, id) {
        var target = event.target;
        if (target.id === id)
            document.getElementById(id).classList.add('invisible');
    }

    return {
        btnCheck,
        show,
        showMore,
        logIn,
        signIn,
        showAddPage,
        showEditPage,
        detailView,
        main,
        add,
        edit,
        hide
    };
}());
/*-------------------------------tests-------------------------------*/
// articleModel.addArticle({
//  id: ++articleModel.counter,
//  title: 'Trump ',
//  content: 'Donald Trump proposes a $54bn (£43bn) military spending increase - a rise of about 9% on 2016.',
//  createdAt: new Date(),
//  author: 'Eugene',
//  img: './img/tab2.jpg',
//  tag: ['politics']
//  });
//articleModel.removeArticle(3);
//articleModel.editArticle(2, {title: 'Hello world'});
//articleModel.getArticles(0, 4, {author: 'Pahom'});//отображает выбранные новости на консоли(и сразу сортирует по новизне)
/////////////////////////////////////////////////////////
articleModel.replaceArticles();
articleRendering.btnCheck();
articleRendering.show();