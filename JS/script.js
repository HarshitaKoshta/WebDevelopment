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

// function strCount(str){
//     let count = 0;
//     for(const char of str){
//         if(char == 'a' || char == 'e' ||char == 'i' ||char == 'o' ||char == 'u'){
//             count++;
//         }
//     }
//     console.log(count);
// }
// strCount("harshitaa");


// const countVow = (str) =>{
//      let count = 0;
//     for(const char of str){
//         if(char == 'a' || char == 'e' ||char == 'i' ||char == 'o' ||char == 'u'){
//             count++;
//         }
//     }
//     console.log(count);
// }
// countVow("harshita");


/* .....for each..... */

// let arr = [1,2,3,4,5];

// arr.forEach((val,idx,arr)=>{
//     console.log(val,idx,arr);
// });


// let num = [2,4,5,7];

// num.forEach((num)=>{
//     console.log("square of",num," is:", num*num);
// });


/*......map.....*/

// num.map((val) => {
//    console.log(val);
// });

// let arrMap = num.map((val) => {
//     return val*val;
// });
// console.log(arrMap);


/* .....filter..... */

let arr = [32,5,6,8,34,7];

// let evenArr = arr.filter((val)=>{
//     return val%2 !== 0;
// });
// console.log(evenArr);

/* ....reduce.... */

const op = arr.reduce((res,curr)=>{
    // return res+curr;
    return res > curr ? res : curr;
});

console.log(op);