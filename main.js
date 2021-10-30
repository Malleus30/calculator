let plus_button = document.querySelector('.plus');
plus_button.addEventListener('click', plus);
/*
let ansver_text= document.querySelector('.ansver_text');
ansver_text.innerHTML=result;
*/

function plus(num1,num2){
    let first_number = document.querySelector('.first_number').value;
    let second_number = document.querySelector('.second_number').value;
    let ansver_text= document.querySelector('.ansver_text');
    num1=+first_number;
    num2=+second_number;
    if(!num1||!num2 || typeof num1!='number' || typeof num2!='number') return alert('error');
    let result =num1+num2;
    alert(result);
    return ansver_text.innerHTML=result ;
}

let minus_button = document.querySelector('.minus');
minus_button.addEventListener('click', minus);

function minus (num1, num2) {
    let first_number = document.querySelector('.first_number').value;
    let second_number = document.querySelector('.second_number').value;
    num1=+first_number;
    num2=+second_number;
    if(!num1 || !num2 || typeof num1!='number' || typeof num2!='number') return alert('error');
    let result=num1-num2;
    return alert(result);
}
let mult_button = document.querySelector('.mult');
mult_button.addEventListener('click', mult);

function mult (num1, num2) {
    let first_number = document.querySelector('.first_number').value;
    let second_number = document.querySelector('.second_number').value;
    num1=+first_number;
    num2=+second_number;
    if(!num1 || !num2 || typeof num1!='number' || typeof num2!='number') return alert('error');
    let result=num1*num2;
    return alert(result);
}

let del_button = document.querySelector('.del');
del_button.addEventListener('click', del);

function del (num1, num2) {
    let first_number = document.querySelector('.first_number').value;
    let second_number = document.querySelector('.second_number').value;
    num1=+first_number;
    num2=+second_number;
    if(!num1 || !num2 || typeof num1!='number' || typeof num2!='number') return alert('error');
    let result=num1/num2;
    return alert(result);
}

let exp_button = document.querySelector('.exp');
exp_button.addEventListener('click', exp);

function exp (num1, num2) {
    let first_number = document.querySelector('.first_number').value;
    let second_number = document.querySelector('.second_number').value;
    num1=+first_number;
    num2=+second_number;
    if(!num1 || !num2 || typeof num1!='number' || typeof num2!='number') return alert('error');
    let result=num1**num2;
    return alert(result);
}

let rem_button = document.querySelector('.rem');
rem_button.addEventListener('click', rem);

function rem(num1, num2) {
    let first_number = document.querySelector('.first_number').value;
    let second_number = document.querySelector('.second_number').value;
    num1=+first_number;
    num2=+second_number;
    if(!num1 || !num2 || typeof num1!='number' || typeof num2!='number') return alert('error');
    let result=num1%num2;
    return alert(result);
}


