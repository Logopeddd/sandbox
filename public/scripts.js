const articleModel = (function () {
    let tagList = ['business', 'sport', 'culture', 'fashion', 'technology', 'science'];
    let articles = [];

    function replaceArticles() {
        return new Promise((resolve) => {
            dbModel.getArray().then((response) => {
                articles = response;
                articles.sort((a, b) => b.createdAt - a.createdAt);
                resolve();
            });
        });
    }

    function getArticle(id) {
        const article = articles.filter((item) => {
            return item._id === id;
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
            typeof article.author === 'string' && article.author.length > 0 &&
            typeof article.summary === 'string' && article.summary.length > 0 &&
            typeof article.content === 'string' && article.content.length > 0 &&
            typeof article.title === 'string' && article.title.length > 0 && article.title.length < 100) {
            // article.id = article.createdAt.toString() + article.author;
            console.log('validateArticle: article' + article.id + ' ' + article.title + article.author + ' - ok');
            return true;
        }
        console.log('validateArticle: article' + article.id + ' ' + article.title + article.author + " - isn't ok");
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
            if (typeof filterConfig.author === 'string' && filterConfig.author.length > 0) {
                filtered = filtered.filter((item) => {
                    return (filterConfig.author === item.author);
                });
            }
            if (filterConfig.createdFrom !== 'Invalid Date') {
                filtered = filtered.filter((item) => {
                    return (item.createdAt.getTime() > filterConfig.createdFrom.getTime());
                });
            }
            if (filterConfig.createdBefore !== "Invalid Date") {
                filtered = filtered.filter((item) => {
                    return (item.createdAt.getTime() < filterConfig.createdBefore.getTime());
                });
            }
        }
        filtered.sort((a, b) => {
            return b.createdAt - a.createdAt;
        });
        console.log('getArticles:');
        filtered.forEach((item) => {
            console.log(item._id + ' ' + item.title);
        });
        return filtered;
    }

    return {
        articles,
        tagList,
        replaceArticles,
        getArticlesLength,
        getArticlesAt,
        getArticle,
        validateArticle,
        getArticles
    };
}());

let articleRendering = (function () {
    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        timezone: 'UTC',
        // hour: 'numeric',
        // minute: 'numeric',
        // second: 'numeric'
    };

    function showArticle(item) {
        const news = document.getElementById('news');
        const tab = document.createElement('div');
        tab.innerHTML = "<div class='tab resize' data-id='" + item._id + "'>" +
            "<h2 onclick = 'articleRendering.detailView(this.parentNode)' class='button'>" + item.title + "</h2>" +
            "<img src=" + item.img + ">" +
            "<p>" + item.summary + "</p>" +
            "<span class='tags'>" + "#" + item.tags + "</span>" +
            "<span class='author'>" + item.author + ", " + item.createdAt.toLocaleString("ru", options) + "</span></div>";
        news.appendChild(tab.firstChild);
    }

    function showFrom(first) {
        const news = document.getElementById('news');
        if (news.lastChild && news.lastChild.classList.contains('pagination')) {
            news.removeChild(news.lastChild);
        }
        articleModel.getArticles(first, first + 12).forEach((item) => {
            showArticle(item);
        });
        const Main = news.firstElementChild;
        Main.classList.add('main');
        Main.firstChild.textContent = Main.firstChild.textContent.toUpperCase();
        if (first + 11 < articleModel.getArticlesLength()) {
            const tab = document.createElement('div');
            tab.innerHTML = '<div class="tab resize pagination"><a onclick="articleRendering.showMore()" class="button">Показать ещё...</a> </div>';
            news.appendChild(tab.firstChild);
        }
    }

    function show() {
        const news = document.getElementById('news');
        while (news.firstElementChild) {
            news.removeChild(news.firstElementChild);
        }
        showFrom(0);
    }

    function showMore() {
        const news = document.getElementById('news');
        showFrom(news.childNodes.length - 1);
    }

    function logIn() {
        document.getElementById('glass').classList.remove('invisible');
        document.getElementById('filter-div').classList.add('invisible');
        document.getElementById('login-div').classList.remove('invisible');
    }

    function signIn() {
        const username = document.getElementById('login-form').login.value;
        const password = document.getElementById('login-form').password.value;
        dbModel.logIn({username, password}).then(
            () => {
                const username = document.getElementById('username');
                btnCheck();
                document.getElementById('glass').classList.add('invisible');
                document.getElementById('login-div').classList.add('invisible');
            });
    }

    function logOut() {
        dbModel.logOut().then(
            () => {
                document.getElementById('username').classList.add('invisible');
                document.getElementById('login-button').classList.remove('invisible');
                startApp();
            });
    }

    function main() {
        document.getElementById('article-tab').classList.add('invisible');
        document.getElementById('add-article').classList.add('invisible');
        document.getElementById('edit-article').classList.add('invisible');
        document.getElementById('news').classList.remove('invisible');
        document.getElementById('glass').classList.add('invisible');
        document.getElementById('filter-div').classList.add('invisible');
        document.getElementById('login-div').classList.add('invisible');
        document.getElementById('filter-form').author.value = '';
        document.getElementById('filter-form').createdFrom.value = '';
        document.getElementById('filter-form').createdBefore.value = '';
        show();
    }

    function showFilter() {
        document.getElementById('glass').classList.remove('invisible');
        // document.getElementById("login-div").classList.add('invisible');
        document.getElementById('filter-div').classList.remove('invisible');
    }

    function filter() {
        document.getElementById('news').innerHTML = '';
        articleModel.getArticles(0, null, {
            author: document.getElementById('filter-form').author.value,
            createdFrom: new Date(document.getElementById('filter-form').createdFrom.value),
            createdBefore: new Date(document.getElementById('filter-form').createdBefore.value),
        }).forEach((item) => {
            showArticle(item);
        });
        document.getElementById('glass').classList.add('invisible');
        document.getElementById('filter-div').classList.add('invisible');
    }

    function detailView(elem) {
        document.getElementById('add-article').classList.add('invisible');
        const item = articleModel.getArticle(elem.dataset.id);
        const tab = document.getElementById('article-tab');
        tab.innerHTML = '<h1>' + item.title + '</h1>' +
            '<img src=' + item.img + '>' +
            '<p>' + item.content + '</p>' +
            '<input class = "admin-button" type="button" onclick="articleRendering.showEditPage(\'' + item._id + '\')" value="Редактировать">' +
            '<input class = "admin-button" type="button" onclick="articleRendering.remove(\'' + item._id + '\')" value="Удалить">' +
            '<span class="author">' + "#" + item.tags + "<br />" + item.author + ', ' + item.createdAt.toLocaleString("ru", options) + '</span> '
        ;
        document.getElementById('news').classList.add('invisible');
        btnCheck();
        tab.classList.remove('invisible');
    }

    function showAddPage() {
        document.getElementById('edit-article').classList.add('invisible');
        document.getElementById('article-tab').classList.add('invisible');
        document.getElementById('news').classList.add('invisible');
        document.getElementById('add-form').heading.value = '';
        document.getElementById('add-form').summary.value = '';
        document.getElementById('add-form').image.value = '';
        document.getElementById('add-form').paragraph.value = '';
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
        dbModel.getName().then(
            (username) => {
                const article = {
                    title: document.getElementById('add-form').heading.value,
                    summary: document.getElementById('add-form').summary.value,
                    content: document.getElementById('add-form').paragraph.value,
                    createdAt: new Date(),
                    author: username,
                    img: document.getElementById('add-form').image.value,
                    tags: document.getElementById('add-form').tags.value,
                };
                if (articleModel.validateArticle(article)) {
                    dbModel.addArticle(article).then(() => {
                        startApp();
                    });
                }
            });
    }

    function remove(id) {
        dbModel.deleteArticle(id).then(() => {
            startApp();
        });
    }

    function edit(id) {
        const article = articleModel.getArticle(id);
        article.title = document.getElementById('edit-form').heading.value;
        article.summary = document.getElementById('edit-form').summary.value;
        article.content = document.getElementById('edit-form').paragraph.value;
        article.img = document.getElementById('edit-form').image.value;
        article.tags = document.getElementById('edit-form').tags.value;
        dbModel.editArticle(article).then(() => {
            startApp();
        });
    }

    function btnCheck() {
        dbModel.getName().then(
            (username) => {
                document.getElementById('login-button').classList.add('invisible');
                const userDiv = document.getElementById('username');
                userDiv.firstElementChild.textContent = 'Добрейший вечерочек, ' + username + ' |';
                userDiv.classList.remove('invisible');
                const buttons = document.getElementsByClassName('admin-button');
                for (let i = 0; i < buttons.length; i++){
                    buttons[i].style.visibility = 'visible';
                }
            });
    }

    function hide(event, id) {
        const target = event.target;
        if (target.id === id) {
            document.getElementById(id).classList.add('invisible');
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
    articleModel.replaceArticles().then(() => {
        articleRendering.btnCheck();
        articleRendering.main();
    });
}
startApp();
