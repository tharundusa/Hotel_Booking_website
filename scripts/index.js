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
