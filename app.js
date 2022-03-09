const email_validation=(input)=>{
// “javascript regex email validation”
const regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const output=document.getElementById('valid-check-output');

    if(input.match(regex)){
     output.innerText='Congratulations! Your email is valid'
     output.style.color='green'
    }else{
        output.innerText='Sorry! Your email is not valid'
        output.style.color='red'
    }

}



//display ouput

document.getElementById('button').addEventListener('click', ()=>{
    const inputField=document.getElementById('input-field');
    email_validation(inputField.value)
    inputField.value=''
})