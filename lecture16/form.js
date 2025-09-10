let formm  = document.querySelector("form")

formm.addEventListener("submit",(e)=>{
      e.preventDefault()
    //   for(let i in formm){
    //     console.log(formm[i].value);
    //   }
    //   console.log(formm[0].value);
    //   console.log(formm[1].value);
    //   console.log(formm[2].value);
    //   console.log(formm[3].value); 

    let data = {
        name : formm[1].value,
        email : formm[2].value,
        pass : formm[3].value
    }
    console.log(data);
    localStorage.setItem("formData",JSON.stringify(data))
    
    formm.addEventListener("reset",(e)=>{
    localStorage.removeItem("formData",JSON.stringify(data))
})

})





