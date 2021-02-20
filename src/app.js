/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
};

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

const randomwho = Math.floor(Math.random() * who.length);
let ww = who[randomwho]; //ww me saca el primer texto random
console.log(ww);
//------------------------------------------------------------------------------//
const randomaction = Math.floor(Math.random() * action.length);
let aa = action[randomaction]; //aa me saca el segundo texto random
console.log(aa);
//------------------------------------------------------------------------------//
const randomwhat = Math.floor(Math.random() * what.length);
let wh = what[randomwhat]; //wh me saca el tercer texto random
console.log(wh);
//------------------------------------------------------------------------------//
const randomwhen = Math.floor(Math.random() * when.length);
let whn = when[randomwhen]; //wh me saca el cuerto texto random
console.log(whn);

document.querySelector(".excusa").innerHTML =
  ww + " " + aa + " " + wh + " " + whn + ".";
