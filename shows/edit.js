function(data, req){
    ddoc = this;
    var Mustache = require("vendor/couchapp/lib/mustache");
    
//    var data = {};
    
    if(data){
        data.doc = JSON.stringify(data);
        data.tagsStr = data.tags.join(', ');
    }
    
    return Mustache.to_html(ddoc.templates.edit, data, ddoc.templates.partials)
}