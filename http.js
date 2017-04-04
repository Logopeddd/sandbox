function getArray() {
    let req = new XMLHttpRequest();
    req.open("GET", "/articles", false);
    req.send();

    req.onreadystatechange = function () {
        if (req.readyState === 4 && req.readyStatus === 200)
            return req.responseText;
    };
    return req.onreadystatechange;
}

function editArticle(article) {
    let req = new XMLHttpRequest();
    req.open("PATCH", "/articles");
    req.setRequestHeader('content-type', 'application/json')
    req.send(JSON.stringify(article));
}

function addArticle(article) {
    let req = new XMLHttpRequest();
    req.open("PUT", "/articles");
    req.setRequestHeader('content-type', 'application/json')
    req.send(JSON.stringify(article));
}

function deleteArticle(id) {
    let req = new XMLHttpRequest();
    req.open("DELETE", "/articles/"+id);
    req.send();
}