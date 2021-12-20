function min(arr){
    // Number.MAX_SAFE_INTEGER => 안정적인 Integer의 최대값
    // let min=Number.MAX_SAFE_INTEGER;
    // for(let n of arr){
    //     if(n<min){
    //         min=n;
    //     }
    // }
    

    // 내장 함수로 
    // 최솟값(Math.min(...배열))
    // 최댓값(Math.max(...배열))
    // ...배열 => spreadOperator  전개 연산자 사용!
    let answer=Math.min(...arr);

    return answer;
}

let arr = [5,3,7,11,2,15,17];
console.log(min(arr))