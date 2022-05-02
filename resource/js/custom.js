
let changeVar = true;
const unchangVar = true;

const btn = document.querySelector("#js_btn");

const a = 2;
const b = 6;

console.log(a + b);

const arrays = ["a", "b", "c", "d", "e"]



console.log(arrays[5]);


arrays.push("f");

const player = {

  Name : "Ossak",
  Lv : "1590",

};

console.log(player);

player.class = "destroyer";

player.Name = "pangsu";

console.log(player);


console.log(arrays[5]);


function lostArk(aa, bb) {

  console.log(aa, bb);

}

btn.addEventListener("click", lostArk);