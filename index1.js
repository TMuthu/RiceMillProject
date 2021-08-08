const slider = document.querySelectorAll('.section');
const sliderdots = document.querySelectorAll('.dot');
let slideindex = 0;
showslide();

function showslide(){
    console.log(slideindex);
    for(var i=0;i<slider.length;i++){
        slider[i].style.display = 'none';
    }
    for(var j=0;j<sliderdots.length;j++){
        sliderdots[j].style.backgroundColor = 'white';
    }
    sliderdots[slideindex].style.backgroundColor = 'blue';
    slider[slideindex].style.display = 'flex';
    slideindex++;
    if(slideindex == slider.length){
        console.log(slideindex);
        slideindex = 0;
    }  
    setTimeout(showslide, 4000);  
}
