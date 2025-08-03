// let item = [238,979,900,600];
// let i = 0;
// for (let val of item){
//     console.log(`value at index ${i} = ${val}`);
//     let offer = val / 10;
//     item[i] = item[i] - offer;
//     console.log(`value after offer = ${item[i]}`);
//     i++;
// }


let food = ["potato","tomato","maggie"];
// food.push("pasta");
// food.pop();

// food.unshift("appe");   add in start
// food.shift();           del from start
console.log(food);
console.log(food.slice(0,2));
food.splice(1,1,"idli","dhokle");
console.log(food);