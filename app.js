// Q no 3
// A no 3


let a =["Bilal","ismail", "asif","amir","mirza galib"]
console.log(a)

//Q no 4
//A no 4

let b =[1,2,3,4,5,5,6,7,9,90,]
console.log(b)


//Q no 5
//A no 5

let c = [true,false,]
console.log(c)


//Q no 6
//A no 6 

let d = [1,"bilal",true]
console.log(d)

//Q no 7
//A no 7 

let edu = ["SSC","HSC","PHD","BS","BSC","BCOM","MS"]
console.log(edu)
document.writeln("<h2>Education!!</h2>")
document.writeln(edu[0])
document.writeln(edu[1])
document.writeln(edu[2])
document.writeln(edu[3])
document.writeln(edu[4])
document.writeln(edu[5])
document.writeln(edu[6])



//Q no 8
//A no 8

let stu = ["bilal","sufiyan","arham","amir"]
let score = [430,450,490,240]
let totalmarks = 500

console.log(`Score of Student ${stu[0]} is ${score[0]}.persentage of ${(score[0] / totalmarks)*100}% `)
console.log(`Score of Student ${stu[1]} is ${score[2]}.persentage of ${(score[1] / totalmarks)*100}% `)
console.log(`Score of Student ${stu[2]} is ${score[2]}.persentage of ${(score[2] / totalmarks)*100}% `)
console.log(`Score of Student ${stu[3]} is ${score[3]}.persentage of ${(score[3] / totalmarks)*100}% `)

document.writeln(`<p>Score of Student ${stu[0]} is ${score[0]}.persentage of ${(score[0] / totalmarks)*100}%</p>`)
document.writeln(`<p>Score of Student ${stu[1]} is ${score[2]}.persentage of ${(score[1] / totalmarks)*100}%</p>`)
document.writeln(`<p>Score of Student ${stu[2]} is ${score[2]}.persentage of ${(score[2] / totalmarks)*100}%</p>`)
document.writeln(`<p>Score of Student ${stu[3]} is ${score[3]}.persentage of ${(score[3] / totalmarks)*100}%</p>`)



//Q no 9
//A no 9

let colors = ["Red","Blue","Black",]
console.log(colors);

console.log("Part a ");
let askUser1 = prompt("enter your color in starting")
colors.unshift(askUser1);
console.log(colors)

console.log("Part b ");
let  askUser2 = prompt("enter your color in ending")
colors.push(askUser2);
console.log(colors)

console.log("Part c ");
colors.unshift("Violet","White")
console.log(colors);

console.log("Part d ");
colors.shift()
console.log(colors);

console.log("Part e ");
colors.pop()
console.log(colors);

console.log("Part f ");
let askUser3 = prompt("Enter index no")
let askUser4 = prompt("Enter color")
colors[askUser3] = askUser4
console.log(colors);



//Q no 10
//A no 10

let marksArr = [1,400,234,244,567]
console.log("Before --->",marksArr);
marksArr.sort()
console.log("after ----->",marksArr);



//Q no 11
//A no 11
let cities = ["Karachi","Lahore","Quetta","Peshawar"]
console.log(cities);

let copycities= cities.slice(0,2) 
console.log( "Copy Cities--->",copycities);



//Q no 12 
//A no 12
let para = ["This","is","my","cat",]
console.log(para);

let para1 = para.join()
console.log("After joinig ---->",para1)



//Q no 13 
//A no 13 
let Devices = [];

Devices.unshift("monitor");  
Devices.unshift("mouse"); 
Devices.unshift("keyboard"); 

console.log("Current Devices -->", Devices);

console.log("Removed:", Devices.shift()); 
console.log("Removed:", Devices.shift()); 
console.log("Removed:", Devices.shift());




//Q no 14
//A no 14

let fruits = [];

fruits.push("Apple"); 
fruits.push("chiku"); 
fruits.push("mango"); 

console.log("Current fruits -->", fruits);

console.log("Removed:", fruits.pop()); 
console.log("Removed:", fruits.pop()); 
console.log("Removed:", fruits.pop());








// ques 15 //
// ans 15 // 
let company = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"]

document.writeln('<h1>Ans 15</h1>')
document.writeln(` <select> 
        <option hidden >Brands</option>
        <option > ${company[0]}</option>
        <option > ${company[1]}</option>
        <option > ${company[2]}</option>
        <option > ${company[3]}</option>
        <option > ${company[4]}</option>
        <option > ${company[5]}</option>
   </select> `)







