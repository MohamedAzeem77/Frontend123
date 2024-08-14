const form=document.querySelector("#form")
const username=document.querySelector("#username")
const email=document.querySelector("#email")
const password=document.querySelector("#password")
const cpassword=document.querySelector("#cpassword")

form.addEventListener('submit',(obj)=>{
    if(validateInputs()==false){
        obj.preventDefault();
    }
})

function validateInputs(){
    const username_value=username.value  
    const email_value=email.value
    const password_value=password.value
    const cpassword_value=cpassword.value

let success=true
if(username_value===" "){
    success=false
    setError (username,'User Name Required')
}
else{
    setSuccess(username)
}

if(email_value===" "){
    success=false
    setError(email,'Email Id Required')
} 
else if(validateEmail(email_value)==false)
{
 success=false
 setError(email,'Invalid Email Id')
}
else{
 setSuccess(email)
}

if(password_value===" "){
    success=false
    setError(password,'password required')
}
else if(password_value.length<8){
    success=false
    setError(password,'Password must have atleast 8 characters long')
}
else{
    setSuccess(password)
}


if(cpassword_value===" "){
    success=false
    setError(cpassword,'Confirm password required')
}
else if(password_value !== cpassword_value){
    success=false
    setError(cpassword,'Password does not match')
}
else{
    setSuccess(cpassword)
}

return success

}