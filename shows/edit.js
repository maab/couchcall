function(doc, req){
    var Mustache = require("vendor/couchapp/lib/mustache");
    
    return Mustache.to_html(this.templates.edit, function(){})
}