function openNav1() {
    document.getElementById("myNav1").style.width = "25%";
}  
function closeNav1() {
    document.getElementById("myNav1").style.width = "0%";
}
function openNav2() {
    document.getElementById("myNav2").style.width = "25%";
}
function closeNav2() {
    document.getElementById("myNav2").style.width = "0%";
}
function openNav3() {
    document.getElementById("myNav3").style.width = "100%";
}
function closeNav3() {
    document.getElementById("myNav3").style.width = "0%";
}
 var btn = document.getElementById("button");

 btn.addEventListener("click", closeNav1);
 btn.addEventListener("click", closeNav2);
 btn.addEventListener("click", closeNav3);

 var btn1 = document.getElementById("button");
 var btn2 = document.getElementById("button");
 var btn3 = document.getElementById("button");

 btn1.addEventListener("click", closeNav2);
 btn1.addEventListener("click", closeNav3);

 btn2.addEventListener("click", closeNav1);
 btn2.addEventListener("click", closeNav3);

 btn3.addEventListener("click", closeNav1);
 btn3.addEventListener("click", closeNav2);