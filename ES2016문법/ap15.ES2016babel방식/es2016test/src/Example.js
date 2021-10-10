//Example.js
const a =1;
const b =2;
const d = 4;
export { a };
export const c =3;
export default b; // default는 파일당 한번만 사용가능

//Example2.js
// import b, { a, c } from 'Example';
// console.log(a, b, c); // 1,2,3

//Example3.js
// import b, { a, c as e } from './Example';
// console.log(a, b, e); // 1, 2, 3
