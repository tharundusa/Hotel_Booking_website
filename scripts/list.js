var ele1=document.getElementById('mapButton');
ele1.onclick = function(){
     document.getElementById('list').style.display="none";
     document.getElementById('map').style.display="block";
}
var ele2=document.getElementById('listButton');
ele2.onclick = function(){
    document.getElementById('list').style.display="flex";
    document.getElementById('map').style.display="none";
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
