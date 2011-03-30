function(head, req){
    var ddoc = this;
    var Mustache = require("vendor/couchapp/lib/mustache");
    var List = require("lib/list");
    
    var contacts = new Array();

    provides("html", function() {
        
//        while(row = getRow()){
//            contact = row.value;
//            contacts.push({
//                id : contact._id,
//                contactName : contact.contactName,
//                quickDial : contact.quickDial,
//                dial : contact.dial
//            });
//        }
        var stash = {
            scripts : {},
            contacts : List.withRows(function(row) {
                var contact = row.value;
                var key = row.key;
            
                return {
                    id : contact._id,
                    contactName : contact.contactName,
                    quickDial : contact.quickDial,
                    dial : contact.dial
                };
            })
//            contacts : [
//            {
//                id : 'contact._id',
//                contactName : 'contact.contactName',
//                quickDial : 'contact.quickDial',
//                dial : 'contact.dial'
//            },
//            {
//                id : 'contact._id',
//                contactName : 'contact.contactName',
//                quickDial : 'contact.quickDial',
//                dial : 'contact.dial'
//            }
//            ]
        };
        return Mustache.to_html(ddoc.templates.index, stash, ddoc.templates.partials, List.send);
    });
}