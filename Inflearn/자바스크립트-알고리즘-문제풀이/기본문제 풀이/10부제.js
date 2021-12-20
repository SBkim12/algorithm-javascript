function violation(d, cars){
    answer =0;
    for(let car of cars){
        if(car%10===d)
        answer++;
    }
    return answer;
}

let arr = [25,23,11,47,53,17,33];
console.log(violation(3, arr));
let arr1 = [12,20,54,30,87,91,30];
console.log(violation(0, arr1));