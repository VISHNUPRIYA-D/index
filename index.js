let hrs=new Date().getHours();
if(hrs<12){
    document.getElementById("time").innerHTML="Good Morning";
}
else if(hrs>=12 && hrs<16){
    document.getElementById("time").innerHTML="Good Afternoon";
}
else {
    document.getElementById("time").innerHTML="Good Evening";
}
console.log(hrs);