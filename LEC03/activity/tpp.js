let input = process.argv.slice(2);
//console.log(input);
//node tpp.js view src -t
let viewFile = require("./commands/view");
let untreefyFile = require("./commands/untreefy");
let treefyFile = require("./commands/treefy");
let cmd = input[0];
switch (cmd) {
    case "view":
        viewFile.view(process.argv[3],process.argv[4]);
        break;
    case "treefy":
        treefyFile.treefy(process.argv[3],process.argv[4]);
        break;
    case "untreefy":
        untreefyFile.untreefy(process.argv[3],process.argv[4]);
        break;
    case "help":
        console.log("Help Command Implemented");
        break;
    default:
        console.log("Work Command");
        break;
}