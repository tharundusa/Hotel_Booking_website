let redirectPage = () =>{
    let v1=document.getElementById('email1');
    const url="http://127.0.0.1:5500/index.html?email=" + v1.value;
    window.location.href = url;
}