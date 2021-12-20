// 모든 알고리즘을 해독할 수 있는 알고리즘 7 원석를 보유한 알고리즘 제왕 파이와 썬은 죽기 전, 이 보물에 '암호'를 걸어 세계 어딘가에 묻어놨다고 공표하였다. 그가 남긴 문자는 아래와 같다.

// // 섬으로 향하라!

// // '   + -- + - + -   '
// // '   + --- + - +   '
// // '   + -- + - + -   '
// // '   + - + - + - +   '

// // 해(1)와 달(0),
// // Code의 세상 안으로!(En-Coding)

let data = ['   + -- + - + -   ',
'   + --- + - +   ',
'   + -- + - + -   ',
'   + - + - + - +   ']
let result = '';
for( let s of data){
    // 정규함수를 통한 공백 제거, +=>1 -=>0 으로 변환
    console.log(s.replace(/ /g, '').replace(/\+/g, '1').replace(/-/g, '0'));
    // parseInt를 통해 2진수 변환
    console.log(parseInt(s.replace(/ /g, '').replace(/\+/g, '1').replace(/-/g, '0'),2));
    // String.fromCharCode => UTF-16.코드 유닛의 시퀀스로부터 문자열을 생성
    console.log(String.fromCharCode(parseInt(s.replace(/ /g, '').replace(/\+/g, '1').replace(/-/g, '0'),2)));
    // 배열 순서로 위에서 생성된 문자를 합치기
    result+=String.fromCharCode(parseInt(s.replace(/ /g, '').replace(/\+/g, '1').replace(/-/g, '0'),2));
}
//합친 단어 출력
console.log(result);