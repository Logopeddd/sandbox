let dbModel = ( function () {
    function getArray() {
        return new Promise(function (resolve, reject) {
            let req = new XMLHttpRequest();
            req.open("GET", "/articles");
            req.onload = function () {
                if (req.status === 200) {
                    resolve(JSON.parse(req.response, function (key, value) {
                        if (key === 'createdAt') return new Date(value);
                        return value;
                    }));
                }
            };
            req.onerror = function () {
                reject(new Error("Error"));
            };
            req.send();
        });
    }

    function addArticle(article) {
        return new Promise(function (resolve, reject) {
            let req = new XMLHttpRequest();
            req.open("PUT", "/articles");
            req.setRequestHeader('content-type', 'application/json');
            req.onload = function () {
                if (req.status === 200)
                    resolve();
            };
            req.onerror = function () {
                reject(new Error("Error"));
            };
            req.send(JSON.stringify(article));
        });
    }

    function deleteArticle(id) {
        return new Promise(function (resolve, reject) {
            let req = new XMLHttpRequest();
            req.open("DELETE", "/articles/" + id);
            req.onload = function () {
                if (req.status == 200)
                    resolve();
            };
            req.onerror = function () {
                reject(new Error("Error"));
            };
            req.send();
        });
    }

    function editArticle(article) {
        return new Promise(function (resolve, reject) {
            let req = new XMLHttpRequest();
            req.open("PATCH", "/articles");
            req.setRequestHeader('content-type', 'application/json');
            req.onload = function () {
                if (req.status == 200)
                    resolve();
            };
            req.onerror = function () {
                reject(new Error("Error"));
            };
            req.send(JSON.stringify(article));
        });
    }

    return {
        getArray,
        editArticle,
        addArticle,
        deleteArticle,
    };
}());