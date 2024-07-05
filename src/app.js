/* eslint-disable */
import "bootstrap";
import "./style.css";

/*import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
*/

let who = [
  "The dog",
  "My grandma",
  "The mailman",
  "John Lennon",
  "Zombie Jesus",
  "Joe Biden"
];
let action = ["ate", "peed", "crushed", "broke", "send to China", "Exploded"];
let what = [
  "my homework",
  "my phone",
  "the car",
  "my laptop",
  "my dignity",
  "my ideas"
];
let when = [
  "before class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying",
  "when I was in the toilet"
];

function getRandomInt() {
  let randomNumber = Math.floor(10 * Math.random());
  while (randomNumber > 5) {
    randomNumber = Math.floor(10 * Math.random());
  }
  return randomNumber;
}

window.onload = function() {
  //write your code here
  let frase =
    who[getRandomInt()] +
    " " +
    action[getRandomInt()] +
    " " +
    what[getRandomInt()] +
    " " +
    when[getRandomInt()];
  document.getElementById("excuse").innerHTML = frase;
};
