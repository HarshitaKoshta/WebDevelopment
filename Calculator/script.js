let inp = document.querySelector("input")
let button = document.querySelectorAll("button")

for(let btn of button){
    btn.addEventListener("click",()=>{
        let txt = btn.innerText;
        // console.log(txt);
        if(txt=="C"){
            inp.value = ""
        }else if(txt == "="){
            inp.value = eval(inp.value)
        }else{
            inp.value += txt
        }
    })
}