let form  = document.querySelector("#formm")

form.addEventListener("submit",(e)=>{
      e.preventDefault()
    //   console.log(formm[0].value);
    //   console.log(formm[1].value);
    //   console.log(formm[2].value);
    //   console.log(formm[3].value); 

    let data = {
        name : form[1].value,
        email : form[2].value,
        pass : form[3].value
    }
    console.log(data);
    localStorage.setItem("formData",JSON.stringify(data))
    
    form.addEventListener("reset",(e)=>{
    localStorage.removeItem("formData",JSON.stringify(data))
})
})

let form2 = document.querySelector("#form2")
form2.addEventListener("submit",(e)=>{
    e.preventDefault()
    let saveData = localStorage.getItem("formData")
    let dataObj = JSON.parse(saveData)

    let logIn = {
    email:form[1].value,
    pass:form[2].value
    }

    if(data.email == logIn.email &&data.pass == logIn.pass){
        prompt("login successfull")
    }else{
        prompt("error ")
    }
})






