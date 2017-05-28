'use strict';

const dbModel = (function () {
    function getArticle(id) {
        return new Promise((resolve, reject) => {
            const req = new XMLHttpRequest();
            req.open('GET', `/articles/${id}`);
            req.onload = () => {
                if (req.status === 200) {
                    resolve(JSON.parse(req.response, (key, value) => {
                        if (key === 'createdAt') return new Date(value);
                        return value;
                    }));
                }
            };
            req.onerror = () => {
                reject(new Error('Error'));
            };
            req.send();
        });
    }

    function getArticles(skip, top, config) {
        return new Promise((resolve, reject) => {
            const req = new XMLHttpRequest();
            req.open('PUT', '/articles');
            req.setRequestHeader('content-type', 'application/json');
            req.onload = () => {
                if (req.status === 200) {
                    resolve(JSON.parse(req.response, (key, value) => {
                        if (key === 'createdAt') return new Date(value);
                        return value;
                    }));
                }
            };
            req.onerror = () => {
                reject(new Error('Error'));
            };
            req.send(JSON.stringify({ skip, top, config }));
        });
    }

    function addArticle(article) {
        return new Promise((resolve, reject) => {
            const req = new XMLHttpRequest();
            req.open('POST', '/articles');
            req.setRequestHeader('content-type', 'application/json');
            req.onload = () => {
                if (req.status === 200) {
                    resolve();
                }
            };
            req.onerror = () => {
                reject(new Error('Error'));
            };
            req.send(JSON.stringify(article));
        });
    }

    function deleteArticle(id) {
        return new Promise((resolve, reject) => {
            const req = new XMLHttpRequest();
            req.open('DELETE', `/articles/${id}`);
            req.onload = () => {
                if (req.status === 200) {
                    resolve();
                }
            };
            req.onerror = () => {
                reject(new Error('Error'));
            };
            req.send();
        });
    }

    function editArticle(article) {
        return new Promise((resolve, reject) => {
            const req = new XMLHttpRequest();
            req.open('PATCH', '/articles');
            req.setRequestHeader('content-type', 'application/json');
            req.onload = () => {
                if (req.status === 200) {
                    resolve();
                }
            };
            req.onerror = () => {
                reject(new Error('Error'));
            };
            req.send(JSON.stringify(article));
        });
    }

    function logIn(user) {
        return new Promise((resolve, reject) => {
            const req = new XMLHttpRequest();
            req.open('POST', '/login');
            req.setRequestHeader('content-type', 'application/json');
            req.onload = () => {
                if (req.status === 200) {
                    resolve();
                } else {
                    reject();
                }
            };
            req.onerror = () => {
                reject(new Error('Error'));
            };
            req.send(JSON.stringify(user));
        });
    }

    function logOut() {
        return new Promise((resolve) => {
            const req = new XMLHttpRequest();
            req.open('GET', '/logout');
            req.onload = () => {
                if (req.status === 200) {
                    resolve();
                }
            };
            req.send();
        });
    }

    function getName() {
        return new Promise((resolve, reject) => {
            const req = new XMLHttpRequest();
            req.open('GET', '/username');
            req.onload = () => {
                if (req.status === 200) {
                    resolve(req.responseText);
                } else {
                    reject();
                }
            };
            req.onerror = () => {
                reject(new Error('Error'));
            };
            req.send();
        });
    }

    return {
        getArticle,
        getArticles,
        editArticle,
        addArticle,
        deleteArticle,
        logIn,
        logOut,
        getName,
    };
}());
