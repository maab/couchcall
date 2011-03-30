function(doc){
    if(doc.type == 'contact' && doc.contactName){
        emit(doc.contactName, doc);
    }
}