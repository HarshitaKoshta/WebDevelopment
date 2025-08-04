// ///********function*********

// function add(a,b){
//     console.log(a+b);
// }
// add(2,6);

// function mul(a,b){
//     return a*b;
// }
// let c = mul(3,4);
// console.log(c);

// ///************Arrow function************
// const arrowsum = (a,b)=>{
//     console.log(a+b);
// };

// let multi = (a,b)=>{
//     console.log(a*b);
// };
// multi(5,6);


/* practice question count vowel in string */

function strCount(str){
    let count = 0;
    for(const char of str){
        if(char == 'a' || char == 'e' ||char == 'i' ||char == 'o' ||char == 'u'){
            count++;
        }
    }
    console.log(count);
}
strCount("harshitaa");


const countVow = (str) =>{
     let count = 0;
    for(const char of str){
        if(char == 'a' || char == 'e' ||char == 'i' ||char == 'o' ||char == 'u'){
            count++;
        }
    }
    console.log(count);
}
countVow("harshita");

