var div2=document.getElementById("innerContent1");
var btn=document.getElementById("button");
function myfunction(){
    if(div2.style.display === "none"){
        div2.style.display='flex';
        btn.innerHTML='viewLess';
    }
    else{
        div2.style.display='none';
        btn.innerHTML='viewMore';
    }
}
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
    }
    else{
        element.setAttribute("data-target","#exampleModal1");
    }
}
