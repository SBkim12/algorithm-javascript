function Odd(arr){

    let odds = arr.filter(n => n%2==1).sort();
    let hap=0;
    for(odd of odds)
        hap+=odd;
    return `
홀수 합 : ${hap} 
홀수 최소값 : ${odds[0]}
`
}

let arr = [12,77,38,41,53,92,85];
console.log(Odd(arr))