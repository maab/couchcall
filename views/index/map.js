function(doc){
    if(doc.type == 'contact' && doc.contactName){
        emit(doc._id, doc);
    }
}