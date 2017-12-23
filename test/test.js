/**********************************************
* Author - Virag Gada
* File - test.js
* Description - File to test the QLight module
***********************************************/



var nodeQlight = require('../node-qlight');

var qlight = new nodeQlight();

var check = qlight.init(0x04d8,0xe73c);

if(check === 0){
    console.log("QLight Tower is connected");
    // Set lights

    check = qlight.control('all','on');
    if(check === 0){
        console.log("Lights Set");
    }else {
        console.log("Error setting lights");
    }

    var clearCheck;
    var timer = setTimeout(function(){
        clearCheck = qlight.clear();
        if(clearCheck === 0){
            console.log("Lights Cleared");
            setTimeout(closeQlight,1000);
        }else {
            console.log("Error clearing lights");
        }
    },5000);

    function closeQlight(){
        qlight.close();
        console.log("Qlight Tower is disconnected");
    }

}else {
    console.log("No QLight Tower found");
}


