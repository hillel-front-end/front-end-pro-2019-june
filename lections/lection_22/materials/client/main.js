// console.log(123123213);



function sendAjax(method, url) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.send();


        xhr.onreadystatechange = function() { // (3)
            if(xhr.readyState != 4) return;
            resolve(JSON.parse(xhr.responseText))
        }

    });
}


sendAjax('get', 'server/datasdsada.json')
    .then(data => data)
    .then(data => data.list.map( item => item + '213'))
    .then(res => console.log(res, 'res'));



