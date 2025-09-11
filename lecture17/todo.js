let inp = document.querySelector("input")
let btn = document.querySelector("button")
let ul = document.querySelector("ul")

btn.addEventListener("click",(e)=>{
    let data = inp.value

    let li = document.createElement("li")
    li.innerText = data
    ul.append(li)
    inp.value=" "
    li.style.fontSize= "30px"
    li.style.color = "yellow"

    li.addEventListener("click",()=>{
        li.remove()
    })
    let arr =[]
    arr.push( localStorage.setItem("todo",JSON.stringify(data)))
    e.preventDefault()

})