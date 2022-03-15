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