var x=5 , y=2 ;
console.log(x*y);
// ***
var btn=document.getElementById("btn");
var div=document.getElementById("dom");

rySelectorAll('.list li');
 var dom = document.querySelector("#dom");
 var btn = document.querySelector("#btn") 
 var totalprice =0;

 allitems.forEach(function(item){
     item.onclick=function(){
         totalprice += parseInt(item.getAttribute("praice"));
        dom.innerHTML+=item.textContent+"<br> ";
        if (dom.innerHTML !="") 
     {
     btn.style.display ="block";
     }
     };  
 });
 

 btn.onclick =function() {
    dom.innerHTML=totalprice;
};