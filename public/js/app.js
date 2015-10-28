'use strict';

/***********************************
*  Service location suggestions
************************************/

$(function(){
    var serveLocations = [
        { value: 'Amnjikarai', data: 'AMJ' },
        { value: 'Ashok Nagar', data: 'AKN' },
        { value: 'Gopalapuram', data: 'GPL' },
        { value: 'KK Nagar', data: 'KKN' },
        { value: 'Kodambakkam', data: 'KDM' },
        { value: 'Koyembedu', data: 'KYM' },
        { value: 'Nandanam', data: 'NDN' },
        { value: 'Nungambakkam', data: 'NGM' },
        { value: 'Saligramam', data: 'SLG' },
        { value: 'T Nagar', data: 'TNG' },
        { value: 'Teynampet', data: 'TYN' },
    ];

    // setup autocomplete function pulling from serveLocations[] array
    $('#userLocation').autocomplete({
        lookup: serveLocations,
        onSelect: function (suggestion) {
            /*var thehtml = '<strong>User Location:</strong> '
                            + suggestion.value
                            + ' <br> <strong>Symbol:</strong> '
                            + suggestion.data;*/
            $('#serviceUnavailableMessage').hide();
            $('#ad').hide();
            $('#menu').show();
        }
    });
    $('#userLocation').change(function(){
        // TODO: cache selected location
        var userLocation = $('#userLocation').val();
        var serviceAvailable = false;
        serveLocations.forEach(function(item){
            var locationItem = item.value;

            if(locationItem && locationItem.toLowerCase() == userLocation.toLowerCase() ){
                serviceAvailable = true;
                $('#serviceUnavailableMessage').hide();
                $('#ad').hide();
                $('#menu').show();
                return;
            }
        });
        if(!serviceAvailable){
            $('#menu').hide();
            $('#serviceUnavailableMessage').show();
        }
    });
    $("#ad").load("/ads/banner/index.html");
});

$('#breakfastCarousel').carousel({
  interval: 10000
});
$('#lunchCarousel').carousel({
    interval: 10000
});
$('#dinnerCarousel').carousel({
    interval: 10000
});

/*************** Map Location *************************************

        // Map Functionality
        function initialize() {
            var mapCanvas = document.getElementById('map');
            var centre = new google.maps.LatLng(13.0503, 80.2235);
            var rad = 2;
            var mapOptions = {
                center: centre,
                zoom: 13,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(mapCanvas, mapOptions);
            rad *= 1600;

            var circle = new google.maps.Circle({
                center: centre,
                radius: rad,
                strokeColor: "#00FF00",
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: "#00FF00",
                fillOpacity: 0.35,
                map: map
            });
        }
        google.maps.event.addDomListener(window, 'load', initialize);
*********************************************************************/
