var numbers = [3,12,34,53,21,56,64,67,45,99,88];

var random = numbers[Math.floor(Math.random()*numbers.length)];

console.log(random);

var list = [3,501,2,60,8,0,9];
var sorted = list.sort((a,b) => {
    return a-b;
});
console.log(sorted);