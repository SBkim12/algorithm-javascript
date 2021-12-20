//삼각 부등식 
//두변의 합이 다른 한변보다 크다
//or
//제일 큰 변이 다른 두변의 합보다 작거나 같아야한다.

function triChk(a, b, c){
    if(a+b<c)
    return "NO";
    if(a+c<b)
    return "NO";
    if(b+c<a)
    return "NO";

    return "YES";
}

console.log(triChk(13,33,17));