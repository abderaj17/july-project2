let emailHolder = document.getElementById('email');
let passwordHolder = document.getElementById('password');
let btn = document.querySelector('button');
let warningMessage = document.getElementById('warning');
let warningMessage2 = document.getElementById('warning2')
let finalMessage = document.getElementById('final');

emailHolder.addEventListener('input',(e)=>{
    let Emailvalue = emailHolder.value;
    let emailLength = Emailvalue.length;
    if(emailLength>=3 && Emailvalue.includes('@') && Emailvalue.includes('.') ){
        warningMessage.innerText="";
        e.preventDefault();
        
    }else{
        warningMessage.innerText = "Make sure email is more than 3 character and has @ and ."
        warningMessage.style.color = 'red';
    }

    passwordHolder.addEventListener('input', (e)=>{
        let passwordValue = passwordHolder.value;
        // console.log(passwordValue);
        let passwordLength = passwordValue.length;
        if(passwordLength>=8){
            warningMessage2.innerText="";
            e.preventDefault();
        }else{
            warningMessage2.innerText = "Make sure password is more than 8 characters."
            warningMessage2.style.color= 'red';
        }
        btn.addEventListener('click', (e)=>{
            finalMessage.innerText = "All gud to go!";
            finalMessage.style.color='green';
            // alert('successfully signup!')
            if (confirm('Do you want to submit the form?')) {
                alert('Successful signup!');
           
            e.preventDefault();
            }
        })
        
        })
    });