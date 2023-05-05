//create button message   header

function getmessage(){
    document.getElementById('message').style.visibility = 'visible';
}

function endmessage(){
    document.getElementById('message').style.visibility = 'hidden';
}

//instructions modal    section 1

var modal  = document.getElementById('instr');

function modalon(){
    modal.style.display='block';
}

function modaloff(){
    modal.style.display='none';
}


//age input     section 2

function getage(){
    let res1 = document.getElementById('ageres1');
    let ageval = document.getElementById('age').value;
    if (ageval == ''){
        alert('Please enter your age.')
        return false;
    }
    if (ageval < 6){
        res1.innerHTML = `Sorry. You are ${ageval}. You must be 6 to play.`;
        }

    else {
        res1.innerHTML = `You are ${ageval}! You are old enough to play!`
        document.getElementById('btnb').style.visibility = 'visible';
        document.getElementById('age').style.visibility='collapse';
        document.getElementById('question1').style.visibility='collapse';
        document.getElementById('btn').style.visibility='collapse';       
    }

}

function ok(){
    document.getElementById('game').style.visibility = 'visible';
        document.getElementById('gameanc').style.visibility = 'visible';
        document.getElementById('btn1').style.visibility = 'visible';
        document.getElementById('question').style.visibility = 'visible';
        document.getElementById('name').style.visibility = 'visible';
        document.getElementById('btn2').style.visibility = 'visible';
        document.getElementById('cont').style.visibility = 'visible';
        document.getElementById('h3').style.visibility = 'visible';
        document.getElementById('btnb').style.visibility='collapse';
        document.getElementById('ageres1').style.visibility='collapse';
    
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
    document.getElementById('nameoutput').style.visibility = 'visible';

    para.innerHTML = `Hello ${nameval} welcome to StarMan!`
    }
    
}


    
 
    
    








