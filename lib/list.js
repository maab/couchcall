// Helpers for writing server-side _list functions in CouchDB
exports.withRows = function(fun) {
    var ret = new Array();
    while(row = getRow()){
        ret.push(fun(row));
    };
    return ret;
}

exports.send = function(chunk) {
    send(chunk + "\n")
}