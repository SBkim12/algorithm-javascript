function find(str, w){
    // match로 구하기
    // let regexOne = new RegExp(w, "g");
    // return str.match(regexOne).length;

    // split으로 구하기
    return str.split(w).length-1;
}

let str = "COMPUTERPROGRAMMING";
let w = "R";
console.log(find(str, w));