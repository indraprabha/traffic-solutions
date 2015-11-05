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
            $('#userInfo')[0].scrollIntoView();
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
                $('#userInfo')[0].scrollIntoView();
                return;
            }
        });
        if(!serviceAvailable){
            $('#menu').hide();
            $('#serviceUnavailableMessage').show();
        }
    });
    //$("#ad").load("/ads/banner/index.html");
    //breakdown the labels into single character spans
    $(".flp label").each(function () {
        var sop = '<span class="ch">'; //span opening
        var scl = '</span>'; //span closing
        //split the label into single letters and inject span tags around them
        $(this).html(sop + $(this).html().split("").join(scl + sop) + scl);
        //to prevent space-only spans from collapsing
        $(".ch:contains(' ')").html("&nbsp;");
    })

    var d;
    //animation time
    $(".flp input").focus(function(){
	    //calculate movement for .ch = half of input height
	    var tm = $(this).outerHeight()/2 *-1 + "px";
	    //label = next sibling of input
	    //to prevent multiple animation trigger by mistake we will use .stop() before animating any character and clear any animation queued by .delay()
	    $(this).next().addClass("focussed").children().stop(true).each(function(i){
		    d = i*50;//delay
		    $(this).delay(d).animate({top: tm}, 200, 'easeOutBack');
	    })
    })
    $(".flp input").blur(function(){
	    //animate the label down if content of the input is empty
	    if($(this).val() == "")
	    {
		    $(this).next().removeClass("focussed").children().stop(true).each(function(i){
			    d = i*50;
			    $(this).delay(d).animate({top: 0}, 500, 'easeInOutBack');
		    })
	    }
    })   
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

/*************** Map Location *************************************/

        // Map Functionality
        function initialize() {
            var centre = new google.maps.LatLng(13.0503, 80.2235);
            var mapOptions = {
                center: centre,
                zoom: 14,
                //mapTypeId: google.maps.MapTypeId.ROADMAP,
                // ULTRA LIGHT: style: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
                style: [{"featureType":"landscape","stylers":[{"visibility":"simplified"},{"color":"#2b3f57"},{"weight":0.1}]},{"featureType":"administrative","stylers":[{"visibility":"on"},{"hue":"#ff0000"},{"weight":0.4},{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"labels.text","stylers":[{"weight":1.3},{"color":"#FFFFFF"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#f55f77"},{"weight":3}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#f55f77"},{"weight":1.1}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#f55f77"},{"weight":0.4}]},{},{"featureType":"road.highway","elementType":"labels","stylers":[{"weight":0.8},{"color":"#ffffff"},{"visibility":"on"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"color":"#ffffff"},{"weight":0.7}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi","stylers":[{"color":"#6c5b7b"}]},{"featureType":"water","stylers":[{"color":"#f3b191"}]},{"featureType":"transit.line","stylers":[{"visibility":"on"}]}]
            };
            // Get the HTML DOM element that will contain your map 
            // We are using a div with id="map" seen below in the <body>
            var mapElement = document.getElementById('map');

            // Create the Google Map using our element and options defined above
            var map = new google.maps.Map(mapElement, mapOptions);

            // Let's also add a marker while we're at it
            var marker = new google.maps.Marker({
                position: centre,
                map: map,
                title: 'MealBasket'
            }); 

            /*var rad = 2000;

            var circle = new google.maps.Circle({
                center: centre,
                radius: rad,
                strokeColor: "#F29500",
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: "#D9B700",
                fillOpacity: 0.3,
                map: map
            });*/
        }
        google.maps.event.addDomListener(window, 'load', initialize);
/*********************************************************************/
