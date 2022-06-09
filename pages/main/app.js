document.getElementById("myButton").onclick = function () {
    location.href = "#ourFriends";
};
document.getElementById("myButton-2").onclick = function () {
    location.href = "../pets/pets.html";
};
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
alert("i am not finished, please don't check work yet <3");
