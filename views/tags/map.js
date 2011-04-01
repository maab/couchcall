function(doc){
    if(doc.type == 'contact' && doc.tags && doc.tags.length){
        var tag;
        var tags = doc.tags;
        for (var i in tags){
            tag = tags[i];
            emit(tag);
        }
    }
}