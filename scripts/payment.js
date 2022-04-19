var element1=document.getElementById("PAYNOW");
function loginFunction(){
    var element=document.getElementById("LOGIN");
    if(element.innerHTML==="LOGIN"){
    var inputUserName=document.getElementById("username");
    var inputPassword=document.getElementById("password");
    localStorage.setItem("userName",inputUserName.value);
    localStorage.setItem("password",inputPassword.value);
    var storedUserName=localStorage.getItem("userName");
    var storedPassword=localStorage.getItem("password");
    if(storedUserName==="admin" && storedPassword==="admin"){
        alert("logged in successfully");
        element.innerHTML="LOG OUT";
        element1.removeAttribute("disabled");
    }
    else{
        alert("cannot login");
    }
}
}
function logoutFunction(){
    var element=document.getElementById("LOGIN");
    if(element.innerHTML==="LOG OUT"){
        element.innerHTML="LOGIN";
        element.setAttribute("data-target","");
        element1.setAttribute("disabled","");
    }
    else{
        element.setAttribute("data-target","#exampleModal1");
    }
}
function payNowFunc(){
    alert("Your Booking is successfull");
    element1.setAttribute("disabled","");

}
