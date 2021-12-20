function solution(str){
    // .match  이용하기
    // return str.match(/[A-Z]/g).length;

    // 아스키코드 활용하기
    let answer=0;
    for(let x of str){
        let num=x.charCodeAt();
        if(num>=65 && num<=90) answer++;
    }
    return answer;
}

let str = "KoreaTimeGood";
console.log(solution(str))