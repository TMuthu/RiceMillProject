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
var navbar = document.querySelector('#navbar');
var navbarlist = document.querySelector('#navbarlist');
var navbarmillnamelist = document.querySelector('#millname');

document.addEventListener('DOMContentLoaded',()=>{
        window.addEventListener('scroll',()=>{
        const top  = document.documentElement.scrollTop;
        console.log(top);
        if(top>100){
            navbar.style.backgroundColor = 'white';
            // navbarmillnamelist.innerHTML = 'Rajalakshmi Rice Mill';
            
        }
        else{
            navbar.style.backgroundColor = '';
            navbarmillnamelist.innerHTML = '';
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

function mapContent(){
    var api_key = 'YOUR_API_KEY';
    var latAndLong = {lat: 11.0214697001936, lng:  77.53150516931241}; 
    var zoomLevel = 14;
    var yourAddress = 'Rajalakshmi Modern Rice Mill, 1147/3A-1, Ramapattinam Road, Sivanmalai POST, Kangeyam, Tiruppur, Tamil Nadu, 638701';

    var map = tt.map({
        container: 'map',
        key: 'DXtV3JoDYm7aFQbbCXAlAqGnwrn8nlND',
        center: latAndLong,
        zoom: zoomLevel
    });

    var marker = new tt.Marker().setLngLat(latAndLong).addTo(map);
     
     // FOR CUSTOM MARKER
    //var customMarker = document.createElement('div');
    //customMarker.id = 'marker';
    //var marker = new tt.Marker({element: customMarker}).setLngLat(latAndLong).addTo(map);

    var popupOffsets = {
      top: [0, 0],
      bottom: [0, -70],
      'bottom-right': [0, -70],
      'bottom-left': [0, -70],
      left: [25, -35],
      right: [-25, -35]
    }

    var popup = new tt.Popup({offset: popupOffsets}).setHTML(yourAddress);
    marker.setPopup(popup).togglePopup();
}

const getdir = document.querySelector('#getdirection');

getdir.addEventListener('click',()=>{
    //location.replace("maps.html");
    window.open('maps.html', '_blank').focus();
})


