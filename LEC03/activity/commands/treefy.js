let fs = require("fs");
let path = require("path");
module.exports.treefy = function(){
    let src = arguments[0];
    let dest = arguments[1];
    let buffer = fs.readFileSync(path.join(src,"metadata.json"));
    let cElem = JSON.parse(buffer);
    //console.log(cElem);
    treefyFn(src,dest,cElem);


    function treefyFn(src,dest,cElem){
        if(cElem.isFile == true){
            let srcpath = path.join(src,cElem.newname);
            let destpath = path.join(dest,cElem.oldname);
            fs.copyFileSync(srcpath,destpath);
        }
        else{
            let dirname = cElem.name;
            let dirpath = path.join(dest,dirname);
            fs.mkdirSync(dirpath);
            console.log(`Directory ${cElem.name} created inside ${dest}`);
            //recursion
            for(let i = 0 ; i < cElem.children.length;i++){
                treefyFn(src,dirpath,cElem.children[i]);
            }

        }
    }
}
