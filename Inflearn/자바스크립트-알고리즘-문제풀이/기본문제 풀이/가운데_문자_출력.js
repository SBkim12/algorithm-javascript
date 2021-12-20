function mid(str){

    // .subString(시작인덱스, 종료인덱스)
    // .substr(시작인덱스, 글자 개수)
    if(str.length%2==0){
        return str.substr(str.length/2-1,2);
    }else{
        return str.substr(str.length/2, 1);
    }
}

let str1 = "study";
let str2 = "moon";
console.log(mid(str1));
console.log(mid(str2));