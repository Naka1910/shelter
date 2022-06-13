document.getElementById("bar").onclick = function(){
    let sdmenu =document.getElementById("sidemn");
    sdmenu.style ="display: block";
    let con1 =document.getElementById("cont-1");
    con1.style ="display: none";
    let barmenu = document.getElementById("bar");
    barmenu.style ="display: none";
    let ntonly =document.getElementById("notonly");
    ntonly.style ="display: none";
}
document.getElementById("side-bar").onclick = function (){
    let sdmenu =document.getElementById("sidemn");
    sdmenu.style ="display:none";
    let con1 =document.getElementById("cont-1");
    con1.style ="display: block";
    let barmenu = document.getElementById("bar");
    barmenu.style ="display: block";
    let ntonly =document.getElementById("notonly");
    ntonly.style ="display: block";
}

document.getElementById("side-help").onclick= function (){
    let sdmenu =document.getElementById("sidemn");
    sdmenu.style ="display:none";
    let barmenu = document.getElementById("bar");
     barmenu.style ="display: block";

   }
   document.getElementById("side-contact").onclick =function(){
    let sdmenu =document.getElementById("sidemn");
    sdmenu.style ="display:none";
    let barmenu = document.getElementById("bar");
     barmenu.style ="display: block";

   }
