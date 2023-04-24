
for (let c = 0; c <=10; c++) {
    console.log (c);
};


let i = 5

while (i < 10) {
    i++;
    console.log (i);
}


 
/*Task 1// Create a for loop where the output will display only the array item that strictly matches

the username(array) .value(array-items) */

/*Example:

const username= ["item1", "item2", "item3", "item4", "item5", "item6"];




for(condition){




  switch(username):

 

  case "item 1":

        console.log(`Welcome ${username[0]}!`);

        break;




  default:

    sorry that's incorrect we don't have that username registered

    break;




  check username //filter

  console item(s) that match

}

*/

const userName = ['blah', 'de', 'some name', 'other', 'noname1', 'someoneelse'];
/*
for (let userName === ; userName < 6; userName++){

switch(userName) {
    case 1:
        console.log(`Welcome ${userName[0]}!`);
        break;

    case 2:
        console.log('de');
        break;
        
    case 3:
        console.log('some name');

    case 4:
        console.log('other');

    case 5:
        console.log('noname1')

    case 6:
        console.log('someoneelse');

}
*/


//template literal practice
let str1 = 'Joe';
let st2 = 'confused';

var full = `${str1} is ${st2} with JavaScript`;  //Joe is confused with JavaScript

console.log(full);

//indexOf
console.log(full.indexOf('s')); //5

//lastIndexOf
console.log(full.lastIndexOf('JavaScript')); //21 logs from right to left, numbers still go from left to right


//Math.
Math.min (1,2,3,4,0.5,0.11, 1.5);
