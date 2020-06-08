let ar1 = [3,6,14,16,22];

function check(num){
    if(num%2 == 0){
        return num += 1;
    }
    else{
       return num -= 1;
    }
}
let ar2 = ar1.map(check);
console.log(ar2);

//Now Implementing filter 

function test(ele){
    for(let i = 2 ; i*i <= ele; i++){
        if(ele % i == 0){
            return false
        }
    }
    return true;
}
let farr = ar2.filter(test);
console.log(farr);

function mymap(ar1,check){
    

}


