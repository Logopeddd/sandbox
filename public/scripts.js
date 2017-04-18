let articleModel = (function () {
    let tagList = ['business', 'sport', 'culture', 'fashion', 'technology', 'science'];
    let articles = [];

    function replaceArticles() {
        return new Promise(function (resolve) {
            dbModel.getArray().then(function (response) {
                articles = response;
                articles.sort((a, b) => b.createdAt - a.createdAt);
                resolve();
            });
        });
    }

    function setLocalUser(username) {
        localStorage.setItem("user", username);
    }

    function getArticle(id) {
        let article = articles.filter((item) => {
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
        if (
            article.createdAt instanceof Date &&
            /* typeof article.tag == "object" && article.tag.length >= 1 && article.tag.length <= 5 &&*/
            typeof article.author === "string" && article.author.length > 0 &&
            typeof article.summary === "string" && article.summary.length > 0 &&
            typeof article.content === "string" && article.content.length > 0 &&
            typeof article.title === "string" && article.title.length > 0 && article.title.length < 100) {
            article.id = article.createdAt.toString() + article.author;
            console.log('validateArticle:  article' + article.id + ' ' + article.title + article.author + ' - ok');
            return true;
        }
        console.log('validateArticle:  article' + article.id + ' ' + article.title + article.author + " - isn't ok");
        return false;
    }

    function getArticles(skip, top, filterConfig) {
        skip = skip || 0;
        top = top || articles.length;
        if (skip > articles.length) {
            return null;
        }
        let filtered = articles.slice(skip, top + skip);
        if (filterConfig) {
            if (typeof filterConfig.author === "string" && filterConfig.author.length > 0) {
                filtered = filtered.filter(item => {
                    return (filterConfig.author == item.author);
                });
            }

            if (filterConfig.createdAt instanceof Date) {
                filtered = filtered.filter(item => {
                    return (item.createdAt().getTime() > filterConfig.createdFrom.getTime() && item.createdAt().getTime() < filterConfig.createdBefore.getTime());
                });
            }
        }
        filtered.sort(function (a, b) {
            return b.createdAt - a.createdAt;
        });
        console.log('getArticles:');
        filtered.forEach(item => {
            console.log(item.id + ' ' + item.title);
        });
        return filtered;
    }

    return {
        articles,
        tagList,
        replaceArticles,
        setLocalUser,
        getArticlesLength,
        getArticlesAt,
        getArticle,
        validateArticle,
        getArticles
    };
}());

let articleRendering = (function () {
    let options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        timezone: 'UTC',
        // hour: 'numeric',
        // minute: 'numeric',
        // second: 'numeric'
    };

    function showArticle(item) {
        let news = document.getElementById('news');
        let tab = document.createElement('div');
        tab.innerHTML = "<div class='tab resize' data-id='" + item.id + "'>" +
            "<h2 onclick = 'articleRendering.detailView(this.parentNode)' class='button'>" + item.title + "</h2>" +
            "<img src=" + item.img + ">" +
            "<p>" + item.summary + "</p>" +
            "<span class='tags'>" + "#" + item.tags + "</span>" +
            "<span class='author'>" + item.author + ", " + item.createdAt.toLocaleString("ru", options) + "</span></div>";
        news.appendChild(tab.firstChild);
    }

    function showFrom(first) {
        let news = document.getElementById('news');
        if (news.lastChild && news.lastChild.classList.contains("pagination")) {
            news.removeChild(news.lastChild);
        }
        // let i;
        // for (i = first; i < articleModel.getArticlesLength() && i < first + 12; i++) {
        //     showArticle(articleModel.getArticlesAt(i));
        // }
        articleModel.getArticles(first, first + 12).forEach(item => {
            showArticle(item);
        });
        let main = news.firstElementChild;
        main.classList.add("main");
        main.firstChild.textContent = main.firstChild.textContent.toUpperCase();
        if (first + 11 < articleModel.getArticlesLength()) {
            let tab = document.createElement('div');
            tab.innerHTML = '<div class="tab resize pagination"><a onclick="articleRendering.showMore()" class="button">Показать ещё...</a> </div>';
            news.appendChild(tab.firstChild);
        }
    }

    function show() {
        let news = document.getElementById('news');
        while (news.firstElementChild)
            news.removeChild(news.firstElementChild);
        showFrom(0);
    }

    function showMore() {
        let news = document.getElementById('news');
        showFrom(news.childNodes.length - 1);
    }

    function logIn() {
        document.getElementById("glass").classList.remove('invisible');
        document.getElementById("filter-div").classList.add('invisible')
        document.getElementById("login-div").classList.remove('invisible');

    }

    function signIn() {
        document.getElementById("login-button").classList.add('invisible');
        articleModel.setLocalUser(document.getElementById('login-form').login.value);
        let username = document.getElementById("username");
        username.firstElementChild.textContent = "HI, " + localStorage.getItem("user") + ' |';
        username.classList.remove('invisible');
        btnCheck();
        document.getElementById('glass').classList.add('invisible');
    }

    function logOut() {
        localStorage.clear();
        document.getElementById("username").classList.add('invisible');
        document.getElementById("login-button").classList.remove('invisible');
        startApp();
    }

    function main() {
        document.getElementById('article-tab').classList.add('invisible');
        document.getElementById('add-article').classList.add('invisible');
        document.getElementById('edit-article').classList.add('invisible');
        document.getElementById('glass').classList.add('invisible');
        document.getElementById('news').classList.remove('invisible');
        show();
    }

    function showFilter() {
        document.getElementById("glass").classList.remove('invisible');
        document.getElementById("login-div").classList.add('invisible');
        document.getElementById("filter-div").classList.remove('invisible');
    }

    function filter() {
        document.getElementById("news").innerHTML = "";
        articleModel.getArticles(0, null, {author: document.getElementById("filter-form").author.value}).forEach(item => {
            showArticle(item);
        });
    }

    function detailView(elem) {
        document.getElementById('add-article').classList.add('invisible');
        let item = articleModel.getArticle(elem.dataset.id);
        let tab = document.getElementById('article-tab')
        tab.innerHTML = '<h1>' + item.title + '</h1>' +
            '<img src=' + item.img + '>' +
            '<p>' + item.content + '</p>' +
            '<span class="author">' + "#" + item.tags + "<br />" + item.author + ', ' + item.createdAt.toLocaleString("ru", options) + '</span> ' +
            '<input class = "admin-button" type="button" onclick="articleRendering.showEditPage(\'' + item.id + '\')" value="Редактировать">' +
            '<input class = "admin-button" type="button" onclick="articleRendering.remove(\'' + item.id + '\')" value="Удалить">'
        ;
        document.getElementById('news').classList.add('invisible');
        btnCheck();
        tab.classList.remove('invisible');
    }

    function showAddPage() {
        document.getElementById('edit-article').classList.add('invisible');
        document.getElementById('article-tab').classList.add('invisible');
        document.getElementById('news').classList.add('invisible');
        document.getElementById('add-form').heading.value = "";
        document.getElementById('add-form').summary.value = "";
        document.getElementById('add-form').image.value = "";
        document.getElementById('add-form').paragraph.value = "";
        document.getElementById('add-article').classList.remove('invisible');
    }

    function showEditPage(id) {
        let item = articleModel.getArticle(id);
        document.getElementById('article-tab').classList.add('invisible');
        document.getElementById('edit-form').heading.value = item.title;
        document.getElementById('edit-form').summary.value = item.summary;
        document.getElementById('edit-form').image.value = item.img;
        document.getElementById('edit-form').paragraph.value = item.content;
        document.getElementById('edit-form').tags.value = item.tags;
        document.getElementById('edit-form').setAttribute('action', "javascript:articleRendering.edit('" + id + "')");
        document.getElementById('edit-article').classList.remove('invisible');
    }

    function add() {
        let article = {
            title: document.getElementById('add-form').heading.value,
            summary: document.getElementById('add-form').summary.value,
            content: document.getElementById('add-form').paragraph.value,
            createdAt: new Date(),
            author: localStorage.getItem("user"),
            img: document.getElementById('add-form').image.value,
            tags: document.getElementById('add-form').tags.value,
        };
        if (articleModel.validateArticle(article)) {
            dbModel.addArticle(article).then(function (ready) {
                startApp();
            })
        }
    }

    function remove(id) {
        dbModel.deleteArticle(id).then(function (ready) {
            startApp();
        });
    }

    function edit(id) {
        let article = articleModel.getArticle(id);
        article.title = document.getElementById('edit-form').heading.value;
        article.summary = document.getElementById('edit-form').summary.value;
        article.content = document.getElementById('edit-form').paragraph.value;
        article.img = document.getElementById('edit-form').image.value;
        article.tags = document.getElementById('edit-form').tags.value;
        dbModel.editArticle(article).then(function (ready) {
            startApp();
        });
    }

    function btnCheck() {
        if (localStorage.getItem("user")) {
            document.getElementById("login-button").classList.add('invisible');
            let username = document.getElementById("username");
            username.firstElementChild.textContent = "Привет, " + localStorage.getItem("user") + ' |';
            username.classList.remove('invisible');
            let buttons = document.getElementsByClassName('admin-button');
            for (let i = 0; i < buttons.length; i++)
                buttons[i].style.visibility = 'visible'
        }
    }

    function hide(event, id) {
        let target = event.target;
        if (target.id === id) {
            document.getElementById(id).classList.add("invisible");
        }
    }

    return {
        remove,
        btnCheck,
        show,
        showMore,
        logIn,
        signIn,
        logOut,
        showFilter,
        filter,
        showAddPage,
        showEditPage,
        detailView,
        main,
        add,
        edit,
        hide
    };
}());

function startApp() {
    articleModel.replaceArticles().then(function (ready) {
        articleRendering.btnCheck();
        articleRendering.main();
    });
}
startApp();
/*-------------------------------tests-------------------------------*/
//articleModel.getArticles(0, 4, {author: 'Pahom'});//отображает выбранные новости на консоли(и сразу сортирует по новизне)
/////////////////////////////////////////////////////////