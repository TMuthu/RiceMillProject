const slider = document.querySelectorAll('.section');
const sliderdots = document.querySelectorAll('.dot');
let slideindex = 0;
showslide();

function showslide(){
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
const navbar = document.querySelector('#navbar');
document.addEventListener('DOMContentLoaded',()=>{
        window.addEventListener('scroll',()=>{
        const top  = document.documentElement.scrollTop;
        console.log(top);
        if(top>20){
            navbar.style.backgroundColor = 'white';
        }
        else{
            navbar.style.backgroundColor = '';
        }
    })
})

const btnricevar = document.querySelector('#riceheader');
const btnbranvar = document.querySelector('#ricebranheader');
const ricevarlist = document.querySelector('#ricevarieties');
const branvarlist = document.querySelector('#branvarities');


btnricevar.addEventListener('click',()=>{
    branvarlist.style.display = 'none';
    ricevarlist.style.display = 'flex';
    btnricevar.style.borderBottom = '2px solid black';
    btnbranvar.style.borderBottom = 'none';
})

btnbranvar.addEventListener('click',()=>{
    branvarlist.style.display = 'flex';
    ricevarlist.style.display = 'none';
    btnbranvar.style.borderBottom = '2px solid black';
    btnricevar.style.borderBottom = 'none';
})

const btnsubmit = document.querySelector('#submit');

btnsubmit.addEventListener('click',()=>{
    alert('Development is in progress');
})



