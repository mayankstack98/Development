let fs = require("fs");
let path = require("path");


module.exports.view = function(){
    let src = arguments[0];
    let mode = arguments[1];
    if(mode == "-t"){
        viewasTree(src,"")
    }
    else{
        viewasFlatFile(src,path.basename(src));
    }
}
function checkWhetherfFIle(src){
    return fs.lstatSync(src).isFile();
}
function getContent(src){
    return fs.readdirSync(src);
}
function viewasFlatFile(src,toprint){
    //check whether File or Directory 
    if(checkWhetherfFIle(src) == true){
        console.log(toprint +" * ");
    }
    else{
        //directory 
        //print
        console.log(toprint);
        //get children
        let childrenNames = getContent(src);
        //console.log(childrenNames);
        for(let i = 0 ; i < childrenNames.length; i++){
            let childpath = path.join(src,childrenNames[i]);
            let ctoprint = path.join(toprint,childrenNames[i]);
            viewasFlatFile(childpath,ctoprint)
        }
    }
}
function viewasTree(src,indent){
    if(checkWhetherfFIle(src) == true){
        console.log(indent + path.basename(src)+" *");
    }
    else{
        //print directory
        console.log(indent+path.basename(src));
        //get children
        let childNames = getContent(src);
        //console.log(childName);
        for(let i = 0 ; i < childNames.length; i++){
            let childpath = path.join(src,childNames[i]);
            viewasTree(childpath,indent+"__");
        }
    }

}

