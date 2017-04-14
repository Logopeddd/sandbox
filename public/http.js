var dbModel = ( function () {
    function getArray() {
        let req = new XMLHttpRequest();
        req.open("GET", "/articles", false);
        req.send();

        req.onreadystatechange = function () {
            if (req.readyState === 4 && req.status === 200)
                return req.responseText;
        };
        return req.onreadystatechange();
    }

    function addArticle(article) {
        let req = new XMLHttpRequest();
        req.open("PUT", "/articles");
        req.setRequestHeader('content-type', 'application/json')
        req.send(JSON.stringify(article));
    }

    function deleteArticle(id) {
        let req = new XMLHttpRequest();
        req.open("DELETE", "/articles/" + id);
        req.send();
    }

    function editArticle(article) {
        let req = new XMLHttpRequest();
        req.open("PATCH", "/articles");
        req.setRequestHeader('content-type', 'application/json')
        req.send(JSON.stringify(article));
    }

    return {
        getArray,
        editArticle,
        addArticle,
        deleteArticle,
    };
}());