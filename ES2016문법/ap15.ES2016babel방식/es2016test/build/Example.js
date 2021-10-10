"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
//Example.js
var a = 1;
var b = 2;
var d = 4;
exports.a = a;
var c = exports.c = 3;
exports.default = b; // default는 파일당 한번만 사용가능

//Example2.js
// import b, { a, c } from 'Example';
// console.log(a, b, c); // 1,2,3

//Example3.js
// import b, { a, c as e } from './Example';
// console.log(a, b, e); // 1, 2, 3