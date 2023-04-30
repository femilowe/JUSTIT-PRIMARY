console.log('Document Object Model');



let elm = document.getElementById('sec');
console.log(elm);

console.log(elm.innerHTML);

elm.innerHTML = 'grocery list';

let elm2 = document.getElementsByClassName('cl');

for (let p=0; p < elm2.length; p++) {
    elm2[p].innerHTML = 'hello';
}



//let elm3 = document.getElementsByTagName('p');
for (let a = 0; a < elm3.length; a++){
    elm3[a].innerHTML = 'NEW, new paragraph';
}

let divElm = document.getElementById('div1');

let h2Elms = divElm.getElementsByTagName('h2');
for (let p = 0; p < h2Elms.length; p++){
    h2Elms[p].innerHTML = 'NEW and better heading!';
}

let userName = prompt('enter your name');
console.log(userName);

let body = document.body;
let divElement = document.getElementById('div11');
let h1Elm = document.createElement('h1');
h1Elm.id = 'newID';
h1Elm.className = 'head';
let text = document.createTextNode('heading created through Javascript');
h1Elm.appendChild(text);

h1Elm.textContent = 'Content added using text content property';

body.appendChild(h1Elm);
let list = document.getElementById('ulList');
let item = document.createElement('li');
item.textContent = 'new list 5';
list.appendChild(item);

//let btn = document.getElementById('btn');
// console.log(btn.getAttribute('class'));
// btn.setAttribute('name', 'button1');
// btn.setAttribute('class', 'cl1');

// btn.removeAttribute('class');
// console.log(btn.getAttribute('class'));
// console.log(btn.hasAttribute('name'));

let btn = document.getElementById('btn');

// //first way
// btn.style.cssText = 'background-color: lightgrey; color: red;'

//second way
//btn.setAttribute('style', 'background-color: black');

//third way

btn.style.cssText += 'color: red;'


//classes
let box = document.getElementById('box');
//console.log(box.classname);

console.log(box.classList);
for(let css of box.classList){
    console.log(css);
}

//remove the dimensions class from the div
box.classList.remove('dimension');
box.classList.add('dimensions');




//test to hide/show paragraph using button (test function)
function test(){
    let para = document.getElementById('para')

    //this will remove paragraph and space

    /*
    if (para.style.display != 'none') {
        para.style.display = 'none'
    }
    else{
        para.style.display = 'block'
    }  */
   
    //or this will remove paragraph and leave a space

    if (para.style.visibility != "hidden"){
     para.style.visibility = "hidden";   
    }
    else{
        para.style.visibility = "visible";
    }
}


// see Teams files for addEventListener examples