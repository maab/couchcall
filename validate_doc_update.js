function (newDoc, oldDoc, userCtx, secObj) {
    var v = require("lib/validate").init(newDoc, oldDoc, userCtx, secObj);
    
    if (newDoc.type == 'contact'){
        v.require('contactName', 'dial');
        v.notEmpty('contactName', 'dial');
        if(v.hasField('quickDial')){
            v.notMatches('quickDial', '[^0-9\+\(\)-]+', 'Quick dial number contains not allowed symbols!')
        }
        v.notMatches('dial', '[^0-9\+\(\)-]+', 'Dial number contains not allowed symbols!')
        
    }
}