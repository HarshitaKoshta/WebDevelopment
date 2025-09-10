let btn = document.querySelector("button")
let body = document.querySelector("body")
let h = document.querySelector("h1")



// btn.onclick=function(){
//     console.log("hello");
// }

// btn.addEventListener("click",()=>{
//     body.style.backgroundColor = "red"
// })

let inp = document.querySelector("input")

inp.addEventListener("input",(e)=>{
    //  console.log(e.target.value)
    h.innerText = e.target.value;
})