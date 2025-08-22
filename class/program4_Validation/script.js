function validate_name(name){
    const regrex = /^[a-zA-Z\s]+$/;
    if(!regrex.test(name)){
        return "Name Must contains AlphaBets and Space!!! "
    }
    return "Valid"
function validate_email(email1){
    const regrex = /^[a-zA-Z0-9,-]+@[a-zA-Z0-9,-] +\.[a-zA-Z]{2,}$/;
    if(!regrex.test(email1)){
        return "Ivalid Email Format !!!!"
    }
    return "Valid Email"
}
function validate_password(password){
    const regrex = /^(?=,*[A-Z])(?=.*\d).{8,}$/;
    if(!regrex.test(password)){
        return "PassWord is must contain one Spcial Charecter and 8 "
    }
    return "Password is valid !!!"
}
function validate_Phonenumber(phNo){
    const regrex=/^[9876][0-9]{10}$/;
    if(!regrex.test(phNo)){
        return "Phone must contains 10 numbers "
    }
    return "Phone Number is Valid !!!"
}
}
function getvalue(){
    let name = document.getElementById("name").value
    let email1 = document.getElementById("email").value
    let password = document.getElementById("Pass").value
    let phNo = document.getElementById("Ph").value
    let validate_name =validate_name(name)
    let validate_email =validate_email(email1)
    let  validate_password=validate_password(password)
    let validate_Phonenumber=validate_Phonenumber(phNo)
    if(validate_name=="valid"&&validate_email=="valid"&&validate_password=="valid"&&validate_Phonenumber=="valid"){
        return true
    }
    document.getElementById("nmaeError").innerText = validate_name ="valid"  ? "" : validate_name();
    document.getElementById("emailError").innerText = validate_email = "valid"? "" : validate_email();
    document.getElementById("PassError").innerText = validate_password = "valid" ?""  : validate_password();
    document.getElementById("PhError").innerText = validate_Phonenumber ="valid" ? "": validate_Phonenumber();
    
}
