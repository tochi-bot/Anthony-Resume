

function initMap(){
    var map=new google.maps.Map(document.getElementById("map"),{
        zoom: 3,
        center: {
            lat: 46.619261,
            lng:  -33.134766
        }
    });
};

var labels="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var locations=[
{
    lat: 51.48523,
    lng:0.14697
},

{
    lat: 41.084045,
    lng: -73.874265
},

{
    lat: 40.74932,
    lng: -73.984016
}

];

var markers= locations.map(function(location, i){
    return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length]
    });
});

