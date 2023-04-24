console.log('Hey!');

var numberA = 5;
let numberb=6;
const numberc=7;
numberD=8;

console.log(numberA);

const car1 = 25000;
const car2 = 40000;

let total = car1 + car2;

console.log(total);

//objects
let profile={fname:'Joe', sname:'Lowe',age:'43',color:'blue'};

console.log(profile.sname);


//array

const genres=["Dance", "Rock", "Country", 'Pop', 'Classical'];

console.log(genres[1]+"", genres[4]);

console.log (genres);

genres.push('jazz');

console.log(genres);

genres[4]='Techno';

console.log(genres);

//task 1

let numA=1;
let numB=2;
let numC=3;
let numD=4;
let numE=5;
let numF=5;

//num equal to (num + num)
console.log(numC==(numA+numB));  //true

//num not equal to (num + num)
console.log(numD!=(numA+numC));  //false

//num equal to (number divided by number)
console.log(numB==(numD/numB));  //true

//num equal [value and type] to num
console.log(numE===numF);  //true

//num greater than num
console.log(numE>numC);  //true

//(num subtract num) less than or equal to (num plus num)
console.log((numF-numB)<=(numA+numB));  //true

//(num times num) greater than num
console.log((numB*numC)>numE);  //true

/* create three variables with string values,
     join them together using operators.*/

let value1='rock';
let value2='roll';
let value3='soul';

console.log (value1+" "+value2);  //rock roll
console.log (value3+" "+value2);  //soul roll
console.log (value3+" "+value1);  //soul rock


//javascript day 2

//convert
let c = String(-12.123)
console.log (typeof c);
console.log (-12.123);
console.log (c);

let d = String (true);
console.log (typeof d);
console.log (true);
console.log (d);

String (false);

String (undefined);

let b = String (NaN)

let cd = Number ('1abc');
console.log(typeof cd);
console.log('1abc');
console.log(cd);

let f = Number (true);
console.log(f);


let cde = Boolean (-12.123);
console.log (cde);

let efg = Boolean ('1abc');
console.log(cde);

let h=Boolean('');
console.log(h);

let i=Boolean(' ');
console.log(i);

let j=Boolean(1-1);
console.log(j);

let k=Boolean(null);
console.log(k);




//if else statement test

const x = 20  //shows yup. will say nope if not 20

if (x==20){
    console.log('yup');
    }

else {(console.log('nope'));  
}

console.log(x);  // shows 20 because not in block




// else if nested inside if else

//let person = 26  //shows 'come in' will vary depending on number


/*

    let age = prompt ('how old are you');
    console.log(age)
    
    if (age>25){
        alert ('come in')
        console.log('come in')}

        else if (age<18){
            alert ('sorry, too young')
            console.log('sorry, no entry, too young')
        }

    else {(Number (age)  >=18 && (age) <=25) 
    let userReply = confirm ('do you have id?');
        console.log(userReply)

    if (userReply===false){
        alert ('sorry, no id no entry')
    }
    else {
        alert ('thank you, come in')
    }
         }    
*/


/*
else if (person>17 && person<=25){
    let id = confirm ('shown id?')  //box will appear in window with options of ok or cancel.
    if (id===true){
        console.log('id checked ok, come in');
    }

    else {console.log('no id, no entry');
    }
}
else {console.log('no entry');
}

*/


/*//check video for 13 april, 1st session, first example (needs to be done from start)

if condition{

}
    if (condition) {

    }
        if (condition){
            you're approved
        }
            else {
                failed check 4
        }
        else {
            failed check 3
    }
    else {
        sorry dont meet required credit rating
    }
else{ sorry you dont meet required age}
*/

/*
let customer = {age1:19, creditScore: 500, homeOwner: true, citizenship: 'no', visa: true};
const customer2 = 23;

let userReply = confirm ('Are you over 18?');
    console.log(userReply)  

    if (userReply === true){
        alert ('You meet required age to apply.')
        console.log('passed age check')
        
        if (creditScore > 450){
            alert ('Credit check passed.')
            console.log('passed credit check')
        }
        

        else {
            alert ('Sorry failed credit check')
            console.log('failed credit check')
        }

    }
    else {
        alert ('You do not meet the required age.')
        console.log('failed age check')
    }

   

console.log(customer)

*/
    

//switch case practice

let weekDay=5;

switch(weekDay){
    case 1:
           console.log('Monday');
           break;
    case 2:
           console.log('Tuesday');
           break;
    case 3:
           console.log('Wednesday');
           break;
    case 4:
           console.log('Thursday');
           break;
    case 5:
           console.log('Friday');
           break;
    case 6: 
           console.log('Saturday');
           break;
    case 7:
           console.log('Sunday');
           break;
           
    default:
            console.log('No match.');
            break;
};

let numbers=[1,5,8,4,6]

switch(numbers [1]){
    case 1:
        console.log('answer is 5');
        break;

    default:
        console.log('no match');
}

//functions


//declaring a function   -- - arrow function syntax
const greeting =() => {
    console.log('hello')
}
//to call/invoke function:
greeting()


//light switch

let lightsOn = true

const lightswitch = () =>{
    if (lightsOn) {
        lightsOn=false
        console.log('lights off')
    } else{
        lightsOn=true
        console.log('lights on')
    }

}

lightswitch()
lightswitch()
lightswitch()


//functions with parameters and arguments
//back ticks (below escape) not quotes

const atm = (accountNumber, amountWithdrawn)=>{
    console.log(`account number: ${accountNumber}. 
    amount withdrawn: $(amountWithdrawn)`)

}

atm(12345678, 1000)

const plus = (num1, num2) =>{
    console.log(num1+num2)
}
plus(10,15)

//functions that call functions

const timesTen = (num) =>{
    return num * 10
}

const timesTwenty = (num) => {
    return timesTen(num) * 2
}

console.log(timesTwenty(10))

console.log(timesTen(10))



//function syntax


//arrow function  (most common)
const squaredArrow = (number)=>{
    return number*number
}

//function declaration
function squaredDeclaration(number){
    return number*number
}

//"anonymous function" called anonymous because function is un-named
const squaredAnon = function(number){
    return number*number
}


//basic calculator

function sumUp(valueOne, valueTwo) {
    return Number(valueOne)+Number(valueTwo);
};
console.log(sumUp (3,4))


const operator = document.getElementById('operations');
const numberOne = document.getElementById('number-one');
const numberTwo = document.getElementById('number-two');
const result = document.getElementById('result');

function calculate(numberOne, numberTwo){

    switch(operator){
        case 1:
            if (operator === '+'){
                let result = Number(numberOne) + Number(numberTwo);
                alert (result);
            }
    }

    return alert (calculate);

}

//template literal practice

let str1 = 'joe'
let str2 = 'confused'

var full = `${str1} is ${str2} with JavaScript`;

console.log(full);