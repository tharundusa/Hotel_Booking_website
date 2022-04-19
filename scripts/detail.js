let redirectPage = () =>{
    let v1=document.getElementById('number');
    let v2=document.getElementById('name');
    let v3=document.getElementById('date1');
    let v4=document.getElementById('date2');
    let v5=document.getElementById('total');
    const url="http://127.0.0.1:5500/payment.html?adults=" + v1.value+ "&name=" + v2.value + "&Fromdate=" + v3.value + 
    "&Todate=" + v4.value + "&total=" + v5.value;
    window.location.href=url;
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
const val4=document.getElementById('total');
val4.value="RS.0";
function getValues(){
    const val1=document.querySelector('input[type="number"]').value;
    const val2=document.querySelector('input[id="date1"]').value;
    const val3=document.querySelector('input[id="date2"]').value;
    var a=val1;
    var b=parseInt(val2[8]+val2[9]);
    var c=parseInt(val3[8]+val3[9]);
    var ans=a*(c-b)*1000;
    val4.value="RS."+ans;
}