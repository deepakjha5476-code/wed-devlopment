string two method
1=length
2=touppercase
3=toLowercase
4=trim
5=trimstart
6=trimend
char retun=str.alert(str.charAt)

let str=programming calasses
str.replace('p','P')
'Programming classes'
str.replace('s','S')
'programming claSses'
str.replaceAll('s','S')
'programming claSSeS'


concat method
let str1="coading classes";
undefined
str.concat(str1)
'programming classescoading classes'
str.slice(7,10)
'min'
str.slice(7,11)
'ming'

let str="programming classes";
undefined
str.startsWith('pro')
true
str.endsWith('ses')
true
str.repeat(3)
'programming classesprogramming classesprogramming classes'

Math calasses
Math.pow(2,3)
8
Math.sqrt(4)
2
Math.ceil(3.3)
4
Math.ceil(3.7)
4
Math.round(3.3)
3
Math.round(3.8)
4
Math.random();(0 to 1)
0.6033606908071792
Math.random()*10(1 to 10)
8.059470877575249
Math.random();
0.6033606908071792
Math.random()*10
8.059470877575249
Math.floor(Math.random()*10);
1
Math.trunc(4.6666)
4

Date class
let date=new Date()
undefined
date
Wed Jun 25 2025 14:20:36 GMT+0530 (India Standard Time)
date.getFullYear()
2025
date.getMonth()//(retun 0 to 11)
5
let mnth=['jan','feb','mar','apr','may','jun','july','aug','sep','oct','nov','dec'];
undefined
mnth[date.getMonth()];
'jun'
date.getDay()
3
date.getDate()
25
date.getHours()
14
date.getMinutes()
20
date.getSeconds()
36
const d=new Date();
undefined
d.setFullYear(2025)
1750842097395
d.setMonth(5)
1750842097395
d.setDate(25)
1750842097395
console.log(d)
VM2503:1 Wed Jun 25 2025 14:31:37 GMT+0530 (India Standard Time)

time class
let time=new Date();
undefined
time.toDateString()
'Wed Jun 25 2025'
time.toTimeString()
'14:34:50 GMT+0530 (India Standard Time)'
time.toLocaleDateString()
'6/25/2025'
time.toLocaleString()
'6/25/2025, 2:34:50 PM'


setInterval(()=>{
    let time=new Date();
    console.log(time.toLocaleString());
},1000);
3
 6/25/2025, 2:43:50 PM
 6/25/2025, 2:43:51 PM
 6/25/2025, 2:43:52 PM
 6/25/2025, 2:43:53 PM
 6/25/2025, 2:43:54 PM
 6/25/2025, 2:43:55 PM
6/25/2025, 2:43:56 PM
 6/25/2025, 2:43:57 PM
 6/25/2025, 2:43:58 PM
 6/25/2025, 2:43:59 PM
 6/25/2025, 2:44:00 PM
clearInterval(3)
undefined

template class
let a=5;
undefined
console.log("value of a="+a);
VM48913:1 value of a=5
undefined
console.log(`value of a=${a}`);
VM68529:1 value of a=5

