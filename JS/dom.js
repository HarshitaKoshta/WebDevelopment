// let heading = document.getElementById("heading1");
// console.dir(heading);
// console.log(heading)

// let headings = document.getElementsByClassName("heading2");
// console.dir(headings);
// console.log(headings);

// let parahs = document.getElementsByTagName("p");
// console.dir(parahs);9

// let firstEle = document.querySelector("p");
// console.dir(firstEle);

// let allEle = document.querySelectorAll("p");
// console.dir(allEle);

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + "from Harshita";
// console.log(h2.innerText)

// let divs = document.querySelectorAll(".box");
// console.log(divs[0]);

// let idx = 1;
// for(div of divs){
//     // console.log(div.innerText);
//     div.innerText = `new unique value ${idx}`;
//     idx++;
    
// }

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));/
// console.log(para.setAttribute("class","newClass"));

// let div = document.querySelector("div");
// div.style.backgroundColor = "pink";
// div.style.fontSize = "26px";

// let newBtn = document.createElement("button");
// newBtn.innerText = "click me!";
// console.log(newBtn);

// let div = document.querySelector("div");
// div.append(newBtn);

// div.prepend(newBtn);
// div.before(newBtn);
// div.after(newBtn);


// let nBtn = document.createElement("button");
// nBtn.innerText = "click me!";

// nBtn.style.color = "white";
// nBtn.style.backgroundColor = "red";

// document.querySelector("body").prepend(nBtn);

//Q2
let para = document.querySelector("p");
// para.setAttribute("class","newClass"); //change the class
para.classList.add("newClass"); ////overwrite in already existing...