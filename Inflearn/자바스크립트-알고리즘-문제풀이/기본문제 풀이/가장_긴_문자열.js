function solution(str){
    let answer, max=Number.MIN_SAFE_INTEGER;
    str.forEach(s => {
        if(s.length>max){
            answer=s;
            max=answer.length;
        }
    });
    return answer;
}

let str = ["teacher", 'time', 'student', 'beautiful', 'good'];
console.log(solution(str));