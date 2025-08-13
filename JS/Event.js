// let btn1 = document.querySelector("#btn1");

// btn1.onclick = (e) => {
//     console.log(e);
//    console.log(e.type);
//    console.log(e.target);
//    console.log(e.clientX,e.clientY);
// };

// let div = document.querySelector("div");

// div.onmouseover = (e) => {
//    console.log(e);
//    console.log(e.type);
//    console.log(e.target);
//    console.log(e.clientX,e.clientY);
// };

// btn1.addEventListener("click",(evt) =>{
//    console.log("button1 was clicked");
//    console.log(evt);
//    console.log(evt.type);
// });

// btn1.addEventListener("click",() =>{
//    console.log("button1 was clicked -- handler2");
// });

// btn1.removeEventListener("click",() =>{
//    console.log("button1 was clicked -- handler2");
// });


////////////question////////

let modeBtn = document.querySelector("#mode");
let currMode = "light";

modeBtn.addEventListener("click",()=>{
   if(currMode==="light"){
      currMode = "dark";
      document.querySelector("body").style.backgroundColor = "black";
   }else{
      currMode = "light";
      document.querySelector("body").style.backgroundColor = "pink";

   }
   console.log(currMode);
});