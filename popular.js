let text1=document.getElementById("text1");
let text2=document.getElementById("text2");
let text3=document.getElementById("text3");
let text4=document.getElementById("text4");
let text5=document.getElementById("text5");
let text6=document.getElementById("text6");




window.addEventListener('scroll',function(){
let value =window.scrollY;
text1.style.marginRight = value * 0.5+ 'px';
text2.style.marginLeft = value * 0.5 + 'px';
text3.style.marginRight = value * 0.5 + 'px';
text4.style.marginLeft = value * 0.5 + 'px';
text5.style.marginRight = value * 0.3 + 'px';
text6.style.marginLeft= value * 0.3 + 'px';

})