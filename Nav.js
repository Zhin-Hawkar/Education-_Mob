function closeNav(){
    document.getElementById("myNav").style.width="0px";
}
function openNav(){
    document.getElementById("myNav").style.width="190px";
}


let Slides = 1;
showSlides();

function showSlides(){
    let i;
    let x=document.getElementsByClassName("mySlides");
    let y=document.getElementsByClassName("dots");

    
    for(i=0; i<x.length; i++){
    x[i].style.display="none";
     }
    Slides++;
    if(Slides > x.length){
    Slides= 1
  }
    for(i=0; i < y.length; i++){
        y[i].className= y[i].className.replace(" active","");
    }
    
    setTimeout(showSlides, 3500);
    x[Slides-1].style.display="block";
    y[Slides-1].className += " active";
    
} 

function Closecont(){
    document.getElementById("myNav-top").style.height="0px";

   
}
function  Opencont(){
    document.getElementById("myNav-top").style.height="190px";
}






