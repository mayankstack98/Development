let fs = require("fs");
let path = require("path");
function checkWhetherfFIle(src){
    return fs.lstatSync(src).isFile();
}
function getContent(src){
    return fs.readdirSync(src);
}
let uniquid = require("uniqid");
function untreefy(src,dest,obj){
//check whether file or directory
if (checkWhetherfFIle(src) == true){
    //copy with new name
    let oldname = path.basename(src);
    let newname = uniquid();
    let destpath = path.join(dest,newname);
    obj.newname = newname;
    obj.oldname  = oldname;
    obj.isFile = true;

    fs.copyFileSync(src,destpath);
    console.log('File ${oldname} from src copied to ${destpath}');

}
else{
    
    obj.isFile = false;
    obj.name = path.basename(src);
    obj.children = [];
    let childnames = getContent(src);

    for (let i = 0 ; i<childnames.length; i++){
        let childpath = path.join(src,childnames[i]);
        let chobj = {};
        untreefy(childpath,dest,chobj);
        obj.children.push(chobj);
    }
}
}
let src = process.argv[2];
let dest= process.argv[3];
let root = {};
untreefy(src,dest ,root);
console.log(root);
