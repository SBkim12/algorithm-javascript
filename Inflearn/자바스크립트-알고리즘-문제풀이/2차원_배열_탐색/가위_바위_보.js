function solution(arr){
    let answer="";
    for(let i=0; i<arr[0].length; i++){
        if(arr[0][i]===arr[1][i])answer+='D ';
        else if(arr[0][i]==2 && arr[1][i]==1) answer+='A ';
        else if(arr[0][i]==1 && arr[1][i]==3) answer+='A ';
        else if(arr[0][i]==3 && arr[1][i]==2) answer+='A ';
        else answer+="B ";
    }
    return answer;
}

let arr = [[2,3,3,1,3], [1,1,2,2,3]];
console.log(solution(arr));