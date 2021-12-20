function solution(str){
    //set으로 배열의 중복 제거
    // const set = new Set(str);
    // 배열로 전환
    // const uniqueArr = [...set];

    //filter로 중복 제거
    //filter는 true를 리턴한 요소들만 필터링함
    return str.filter((v,i)=>{if(str.indexOf(v)===i)return true;})
}

let str= ['good', 'time', 'good', 'time', 'student'];
console.log(solution(str));
