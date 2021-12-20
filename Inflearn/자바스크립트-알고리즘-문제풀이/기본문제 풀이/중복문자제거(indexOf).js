function solution(str){
    let answer = "";
    for(let i=0; i<str.length; i++){
        if(str.indexOf(str.charAt(i))===i){
            answer+=str.charAt(i);
        }
    }
    return answer;
}

let str = "ksekkset";
console.log(solution(str))