function(head, req){
    var ddoc = this;
    var List = require("lib/list");
    
    var contacts = new Array();

    var row, contact,contactName,dial,tags;
    var quickDial = ''
    var query = req.query.query

    provides("json", function() {
        
        send('[');
        while(row = getRow()){
            contact = row.value;
            contactName = contact.contactName;
            if(typeof(contact.quickDial) != 'undefined'){
                quickDial = contact.quickDial;
            }
            dial = contact.dial;
            
            if(contact.tags){
                tags = contact.tags.toString();
            }

            if(contactName.match(query) || quickDial.match(query) || dial.match(query) || tags.match(query)){
                send(JSON.stringify(contact) + ',\n' );
            }
            
        }
        send(']')
        send('\n');
    });
}