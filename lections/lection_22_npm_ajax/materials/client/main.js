// console.log(123123213);



function sendAjax(method, url) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.send();


        xhr.onreadystatechange = function() { // (3)
            console.log(xhr.responseText, xhr.readyState,'xhr.responseText');
            if(xhr.readyState == 4) {
                let response = JSON.parse(xhr.responseText);
                resolve(response);
            }   
        }

    });
}


sendAjax('get', 'server/data.json')
    .then(data => data)
    .then(data => data.list.map( item => item + '213'))
    .then(res => console.log(res, 'res'));



