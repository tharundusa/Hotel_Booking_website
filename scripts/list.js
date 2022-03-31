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