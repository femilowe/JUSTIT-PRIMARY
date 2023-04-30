
//age input     section 3

function getage(){

    let ageval = document.getElementById('age').value;
    if ( ageval > 5){
        alert('You are old enough to be a StarMan astronaut!')
        document.getElementById('game').style.visibility = 'visible';
        document.getElementById('gameanc').style.visibility = 'visible';
        document.getElementById('btn1').style.visibility = 'visible';
        document.getElementById('question').style.visibility = 'visible';
        document.getElementById('name').style.visibility = 'visible';
        document.getElementById('btn2').style.visibility = 'visible';
        document.getElementById('cont').style.visibility = 'visible';
        document.getElementById('h3').style.visibility = 'visible';
        document.getElementById('age').style.visibility='collapse';
        document.getElementById('question1').style.visibility='collapse';
        document.getElementById('btn').style.visibility='collapse';
    }
    else{
        alert('Sorry. You must be at least 6 years old to play.')
    }

    
}


//instructions modal    section 1

var modal  = document.getElementById('instr');

function modalon(){
    modal.style.display='block';
}

function modaloff(){
    modal.style.display='none';
}



//create button message   section 3

function getmessage(){
    document.getElementById('message').style.visibility = 'visible';
}

function endmessage(){
    document.getElementById('message').style.visibility = 'hidden';
}
    


//name input     section 3

function getvalue(){
    let para = document.getElementById('nameoutput');
    let nameval = document.getElementById('name').value;
    if ( nameval == ''){
        alert('Please enter your name.');
        return false;
    }
    else{
    document.getElementById('name').style.visibility = 'collapse';
    document.getElementById('btn2').style.visibility = 'collapse';
    document.getElementById('question').style.visibility = 'collapse';

    para.innerHTML = `Hello ${nameval} welcome to StarMan!`
    }
    
}


    
 
    
    








