// ## A Pyramid of base 7
//
// ```
//    *
//   ***
//  *****
// *******
// ```
let txt = "";
let txt2 = "*";

for(let i = 0; i < 2; i++){
  txt += " ";
}
console.log(txt + " " + txt2);

for(let i = 0; i < 3; i++){
  txt += "**";
  console.log(txt + txt2);
  txt = txt.slice(1);
}