const form = document.querySelector('#form');
const userName = document.querySelector('#username');
const email= document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

const usermsg = document.querySelector('#usm');
const emailrmsg = document.querySelector('#emm');
const pwdmsg = document.querySelector('#pwm');
const pwd2rmsg = document.querySelector('#pwm2');


function userCheck(input, min){
    value=input.value.trim();
    if(value.length  < min){
        userName.style.borderColor='red';
        usermsg.style.visibility ='visible';
        usermsg.innerText = 'type min 3 characters';
    }else{
        userName.style.borderColor='green';
    }
    
}
function pwdCheck(input, min){
    value=input.value.trim();
    if(value.length  < min){
        password.style.borderColor='red';
        pwdmsg.style.visibility ='visible';
        pwdmsg.innerText = 'type min 8 characters';
    }else{
       password.style.borderColor='green';
    };
    
};
function pwdCheck2(input1,input2){
    if (input1.value !== input2.value) {
      pwd2rmsg.style.visibility='visible';
      pwd2rmsg.innerText='password didnt match';
      password2.style.borderColor='red';
      }
};
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
      email.style.borderColor='green'
    } else {
      emailrmsg.style.visibility='visible';
      emailrmsg.innerText='invalid email';
      email.style.borderColor='red';
    }
  }

form.addEventListener('submit',function(event){
    event.preventDefault();
    userCheck(userName,5);
    checkEmail(email);
    pwdCheck(password,8);
    pwdCheck2(password,password2);

})

