'use strict';

const articleModel = (function () {
    function validateArticle(article) {
        if (typeof article.tags === 'string' && article.author.length > 0 &&
            typeof article.author === 'string' && article.author.length > 0 &&
            typeof article.summary === 'string' && article.summary.length > 0 &&
            typeof article.content === 'string' && article.content.length > 0 &&
            typeof article.title === 'string' && article.title.length > 0) {
            console.log(`validateArticle: article ${article.id} ${article.title} ${article.author} - ok`);
            return true;
        }
        console.log(`validateArticle: article ${article.id} ${article.title} ${article.author} - isn't ok`);
        return false;
    }

    return {
        validateArticle,
    };
}());

const articleRendering = (function () {
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
        tab.innerHTML = `<div class='tab resize' data-id=${item._id}>
            <h2 onclick = 'articleRendering.detailView(this.parentNode.dataset.id)' class='button'>${item.title}</h2>
            <img src=${item.img}>
            <p>${item.summary}</p>
            <span class='tags'>#${item.tags}</span>
            <span class='author'>${item.author}, ${item.createdAt.toLocaleString('ru', options)}</span></div>`;
        news.appendChild(tab.firstChild);
    }

    function showFrom(skip) {
        dbModel.getArticles(skip, 13, JSON.parse(localStorage.getItem('filterConfig'))).then((articles) => {
            const news = document.getElementById('news');
            if (news.lastChild && news.lastChild.classList.contains('pagination')) {
                news.removeChild(news.lastChild);
            }
            articles.slice(0, 12).forEach(item => showArticle(item));
            if (articles.length > 12) {
                const Main = news.firstElementChild;
                Main.classList.add('main');
                Main.firstChild.textContent = Main.firstChild.textContent.toUpperCase();
                const tab = document.createElement('div');
                tab.innerHTML = '<div class="tab resize pagination"><a onclick="articleRendering.showMore()" class="button">Показать ещё...</a> </div>';
                news.appendChild(tab.firstChild);
            }
        });
    }

    function showMore() {
        dbModel.getArticles().then((articles) => {
            const news = document.getElementById('news');
            showFrom(news.childNodes.length - 1);
        });
    }

    function logIn() {
        document.getElementById('glass').classList.remove('invisible');
        document.getElementById('filter-div').classList.add('invisible');
        document.getElementById('login-div').classList.remove('invisible');
    }

    function signIn() {
        const username = document.getElementById('login-form').login.value;
        const password = document.getElementById('login-form').password.value;
        dbModel.logIn({ username, password }).then(
            () => {
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
        document.getElementById('back').classList.add('invisible');
        document.getElementById('up').classList.add('invisible');
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
        document.getElementById('filter-form').tags.value = '';
        scroll(localStorage.getItem('scrollX'), localStorage.getItem('scrollY'));
        // document.getElementById('news').innerHTML = '';
    }

    function showFilter() {
        document.getElementById('glass').classList.remove('invisible');
        document.getElementById('login-div').classList.add('invisible');
        document.getElementById('filter-div').classList.remove('invisible');
    }

    function filter() {
        const config = {};
        if (document.getElementById('filter-form').author.value !== '') {
            config.author = document.getElementById('filter-form').author.value;
        }
        if (document.getElementById('filter-form').createdFrom.value !== '' || document.getElementById('filter-form').createdBefore.value !== '') {
            config.createdAt = {};
            if (document.getElementById('filter-form').createdFrom.value !== '') {
                config.createdAt.$gte = new Date(document.getElementById('filter-form').createdFrom.value);
            }
            if (document.getElementById('filter-form').createdBefore.value !== '') {
                config.createdAt.$lt = (new Date(document.getElementById('filter-form').createdBefore.value).valueOf() + 86400000);
            }
        }
        if (document.getElementById('filter-form').tags.value !== '') config.tags = document.getElementById('filter-form').tags.value;
        document.getElementById('news').innerHTML = '';
        localStorage.setItem('filterConfig', JSON.stringify(config));
        articleRendering.showFrom(0);
        main();
    }

    function filterByTag(tag) {
        document.getElementById('news').innerHTML = '';
        localStorage.setItem('filterConfig', JSON.stringify({tags: tag}));
        articleRendering.showFrom(0);
        main();
    }

    function detailView(id) {
        dbModel.getArticle(id).then((item) => {
            localStorage.setItem('scrollX', window.pageXOffset);
            localStorage.setItem('scrollY', window.pageYOffset);
            const tab = document.getElementById('article-tab');
            tab.innerHTML = `<h1>${item.title}</h1>
                <img src=${item.img}>
                <p>${item.content}</p>
                <input class = 'admin-button' type='button' onclick="articleRendering.showEditPage('${item._id}')" value='Редактировать'>
                <input class = 'admin-button' type='button' onclick="articleRendering.remove('${item._id}')" value='Удалить'>
                <span class='author'>#${item.tags}<br/>${item.author}, ${item.createdAt.toLocaleString('ru', options)}</span>`;
            document.getElementById('news').classList.add('invisible');
            btnCheck();
            scroll(0, 0);
            tab.classList.remove('invisible');
            document.getElementById('back').classList.remove('invisible');
        });
    }

    function showAddPage() {
        document.getElementById('edit-article').classList.add('invisible');
        document.getElementById('article-tab').classList.add('invisible');
        document.getElementById('filter-div').classList.add('invisible');
        document.getElementById('glass').classList.add('invisible');
        document.getElementById('news').classList.add('invisible');
        document.getElementById('add-form').heading.value = '';
        document.getElementById('add-form').summary.value = '';
        document.getElementById('add-form').image.value = '';
        document.getElementById('add-form').paragraph.value = '';
        document.getElementById('add-article').classList.remove('invisible');
        document.getElementById('back').classList.remove('invisible');
    }

    function showEditPage(id) {
        dbModel.getArticle(id).then((item) => {
            document.getElementById('article-tab').classList.add('invisible');
            document.getElementById('edit-form').heading.value = item.title;
            document.getElementById('edit-form').summary.value = item.summary;
            document.getElementById('edit-form').image.value = item.img;
            document.getElementById('edit-form').paragraph.value = item.content;
            document.getElementById('edit-form').tags.value = item.tags;
            document.getElementById('edit-form').setAttribute('action', `javascript:articleRendering.edit('${id}')`);
            document.getElementById('edit-article').classList.remove('invisible');
            document.getElementById('back').classList.remove('invisible');
        });
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
        dbModel.editArticle({
            _id: id,
            title: document.getElementById('edit-form').heading.value,
            summary: document.getElementById('edit-form').summary.value,
            content: document.getElementById('edit-form').paragraph.value,
            img: document.getElementById('edit-form').image.value,
            tags: document.getElementById('edit-form').tags.value,
        }).then(() => startApp());
    }

    function btnCheck() {
        dbModel.getName().then(
            (username) => {
                document.getElementById('login-button').classList.add('invisible');
                const userDiv = document.getElementById('username');
                userDiv.firstElementChild.textContent = `Добрейший вечерочек, ${username} |`;
                userDiv.classList.remove('invisible');
                const buttons = document.getElementsByClassName('admin-button');
                for (let i = 0; i < buttons.length; i++) {
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
        showFrom,
        showMore,
        logIn,
        signIn,
        logOut,
        showFilter,
        filter,
        filterByTag,
        showAddPage,
        showEditPage,
        detailView,
        main,
        add,
        edit,
        hide,
    };
}());

function startApp() {
    localStorage.clear();
    articleRendering.main();
    localStorage.clear();
    document.getElementById('news').innerHTML = '';
    articleRendering.showFrom(0);
}
startApp();
