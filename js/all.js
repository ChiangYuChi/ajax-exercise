var xhr = new XMLHttpRequest();
xhr.onload = function () {
    if (xhr.status === 200) {
        responseObject = JSON.parse(xhr.responseText);

        newContent = responseObject.result.records;


    }
    initMap();

}



xhr.open('get', 'https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97', true);

xhr.send(null);







var zone = document.getElementById('ZoneId');
var nowZone = document.querySelector('.nowZone');
var list = document.querySelector('.list');

var hotZone1 = document.querySelector('.hotZone1');
var hotZone2 = document.querySelector('.hotZone2');
var hotZone3 = document.querySelector('.hotZone3');
var hotZone4 = document.querySelector('.hotZone4');



function updateList(e) {
    var select = e.target.value;
    var str = '';

    for (var i = 0; responseObject.result.records.length > i; i++) {
        if (select == responseObject.result.records[i].Zone) {
            str += '<li class=" place">' +
                '<img class="photo" src="' + responseObject.result.records[i].Picture1 + '">' +
                '<h3 class="name">' + responseObject.result.records[i].Name + '</h3>' +
                '<h3 class="zone">' + responseObject.result.records[i].Zone + '</h3>' +
                '<h3 class="opentime"  >' + '<img src="./img/icons_clock.png">' + responseObject.result.records[i].Opentime + '</h3>' +
                '<h3 class="add">' + ' <img src="./img/icons_pin.png">' + responseObject.result.records[i].Add + '</h3>' +
                '<h3 class="tel">' + '<img src="./img/icons_phone.png">' + responseObject.result.records[i].Tel + '</h3>' +
                '<h3 class="ticketinfo">' + '    <img src="./img/icons_tag.png" alt="">' + responseObject.result.records[i].Ticketinfo + '</h3>' +
                '</li>';
        }
        list.innerHTML = str;
    }
    nowZone.innerHTML = select;
}

zone.addEventListener('change', updateList, false);

hotZone1.addEventListener('click', updateList, false);
hotZone2.addEventListener('click', updateList, false);
hotZone3.addEventListener('click', updateList, false);
hotZone4.addEventListener('click', updateList, false);



function initMap() {
    //設定中心點座標

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: {
            lat: 22.594857,
            lng: 120.313130
        },





        styles: [{
                "elementType": "geometry",
                "stylers": [{
                    "color": "#ebe3cd"
                }]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#523735"
                }]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#f5f1e6"
                }]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#c9b2a6"
                }]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#dcd2be"
                }]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#ae9e90"
                }]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#dfd2ae"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#dfd2ae"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#93817c"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#a5b076"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#447530"
                }]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f5f1e6"
                }]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#fdfcf8"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f8c967"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#e9bc62"
                }]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e98d58"
                }]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#db8555"
                }]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#806b63"
                }]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#dfd2ae"
                }]
            },
            {
                "featureType": "transit.line",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#8f7d77"
                }]
            },
            {
                "featureType": "transit.line",
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#ebe3cd"
                }]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#dfd2ae"
                }]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#b9d3c2"
                }]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#92998d"
                }]
            }
        ]



    });







    for (var i = 0; i < newContent.length; i++) {
        var str = {};
        var place = {};
        place.lat = parseFloat(newContent[i]['Py']);
        place.lng = parseFloat(newContent[i]['Px']);

        str.map = map;
        str.title = newContent[i]['Name'];
        str.position = place;
        console.log(str);
        new google.maps.Marker(str);
    }



}