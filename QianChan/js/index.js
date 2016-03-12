var back = document.getElementById("#backToTop");
var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
window.onscroll = function(){
    back.style.display = "block";
}
top.onclick = function(){
    back.style.display = "none";
}