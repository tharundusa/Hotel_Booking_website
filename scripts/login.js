let redirectPage = () => {
    let v1 = document.getElementById('username');
    let v2 = document.getElementById('password');
    const url = "http://127.0.0.1:5500/index.html?username=" + v1.value  + 
        "&password=" + v2.value;
    window.location.href = url;
}