function rank(arr){
    let answer = [];
    for(let i=0; i<arr.length; i++){
        answer.push((arr.filter(n=>arr[i]<n)).length+1);
    }
    return answer;
}

let = [87, 89, 92, 100, 76];
console.log(rank(let));