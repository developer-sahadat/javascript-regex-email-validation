const email_validation=(input)=>{
// “javascript regex email validation”
const regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const validCheckOutput=document.getElementById('valid-check-output');

    if(input.match(regex)){
     validCheckOutput.innerText='Congratulations! Your email is valid'
     validCheckOutput.style.color='green'
    }else{
        validCheckOutput.innerText='Sorry! Your email is not valid'
        validCheckOutput.style.color='red'
    }

}



//display ouput

document.getElementById('button').addEventListener('click', ()=>{
    const inputField=document.getElementById('input-field');
    email_validation(inputField.value)
    inputField.value=''
})