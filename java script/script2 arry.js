let arr=[1,2,3,4,5,6];
for(let x of arr){
    console.log(x);
}
 1
 2
 4
 5
 6
undefined
arr[3]
4
arr.length
6
let arr=["ram","mohan","sohan",];
for(let x of arr){
    console.log(x);

VM205:4 Uncaught SyntaxError: Unexpected end of input
[NEW] Explain Console errors by using Copilot in Edge: click
         
let arr=["ram","mohan","sohan",];
for(let x of arr){
    console.log(x);
}

VM209:3 ram
VM209:3 mohan
VM209:3 sohan
undefined
let arr=["ram",1,3,4,"sohan",];
for(let x of arr){
    console.log(x);
}

ram
1
3
4
sohan
// arrr.push=last opsition element add
// unsift first element add
// arr.pop= remove to last element
//arr.reverse=to 
//arr.shift=
//arr.map=same type
// reduse=callcute all the data
//(...)sprade operator
arr.include=search date for element
arr.indexof=

let arr=[1,2,3,4,5,6];
undefined
arr.push(8);
7
arr
(7) [1, 2, 3, 4, 5, 6, 8]
arr.unshift(34);
8
arr
(8) [34, 1, 2, 3, 4, 5, 6, 8]
arr
(8) [34, 1, 2, 3, 4, 5, 6, 8]
arr.pop()
8
arr
(7) [34, 1, 2, 3, 4, 5, 6]
arr.shift()
34
arr
(6) [1, 2, 3, 4, 5, 6]
arr.reverse()
(6) [6, 5, 4, 3, 2, 1]
arr.short()
VM626:1 Uncaught TypeError: arr.short is not a function
    at <anonymous>:1:5
[NEW] Explain Console errors by using Copilot in Edge: click 
 to explain an error. Learn more
arr.sort()
(6) [1, 2, 3, 4, 5, 6]
arr.slice(2,4)
(2) [3, 4]
arr.splice(2,1,10);
[3]
arr
(6)[1, 2, 10, 4, 5, 6]
arr.splice(2,1,12);
[10]
arr
(6)[1, 2, 12, 4, 5, 6]
arr.forEach((n)=>{
    console.log(n);
});
 1
 2
 12
 4
 5
 6
map
let arr=[11,22,33];
undefined
let arr1=arr.map((n)=>{
    return n*2;
});
undefined
let arr=[45,11,46,2,8,35];
undefined
let arr1=arr.filter((n)=>{
    return n>30;
});
undefined
arr1
(3)[45, 46, 35]

// reduse=callcute all the data

let arr=[1,2,3,4,5,6];
undefined
let x=arr.reduce((prev,next)=>{
    return prev*next;
});
undefined
x
720

// copy(=)

let arr=[1,2,3,4,5,6];
undefined
let arr1=arr;
undefined
arr1
(6)[1, 2, 3, 4, 5, 6]

arr1
(6)[1, 2, 3, 4, 5, 6]
arr1.push(8)
7
arr1
(7) [1, 2, 3, 4, 5, 6, 8]
arr
(7) [1, 2, 3, 4, 5, 6, 8]


[...]

let arr=[1,2,3,4,5,6];
let arr1=[...arr];
undefined
arr1
(6) [1, 2, 3, 4, 5, 6]
arr1.push(23);
7
arr1
(7)[1, 2, 3, 4, 5, 6, 23]
arr
(6)[1, 2, 3, 4, 5, 6]


arr.indesof
rr.indexOf(4)
3
let arr=[11,45,34];
undefined
let arr1=[23,56,78];
undefined
arr.concat(arr1)
(6) [11, 45, 34, 23, 56, 78]

let S= new set();

s.add(12)

s.add(34)

for


find
let arr=[1,2,3,4,5,6];
undefined
arr.find((n)=>{
    return n>4;
});
5s
