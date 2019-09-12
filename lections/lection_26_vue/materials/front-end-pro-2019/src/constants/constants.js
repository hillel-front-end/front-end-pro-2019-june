const url = function(domen, port, params) {
    return `http://${domen}:${port}/${params}`;
}

export  {
    url
}