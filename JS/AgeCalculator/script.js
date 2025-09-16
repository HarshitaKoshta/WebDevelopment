let usrInp= document.getElementById("date");
usrInp.max = new Date().toISOString().split("T")[0];

function calcAge(){
    let birthDate = new Date(usrInp.value)
    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getDate();
 
    let today = new Date()

    let d2 = birthDate.getDate();
    let m2 = birthDate.getDate() + 1;
    let y2 = birthDate.getDate();

    let d3 , m3 ,y3

    y3 =y2 -y1;
     
    if(m2 >= m1){
        m3 = m2 - m1;
    }else{
        y3--
        m3 = 12 + m2 - m1;
    }

    
}