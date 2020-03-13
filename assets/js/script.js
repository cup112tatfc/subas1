var scrollMenu = {
    init: function() {
        this.scroll();

    },
    scroll: function() {
        window.addEventListener('scroll', (function(event) {
            this.position = window.pageYOffset;
            this.topMenu = document.querySelector('.header-menu');
            if (position > 1) {
                topMenu.classList.add("sticky");
            } else {
                topMenu.classList.remove("sticky");
            }
        }))
    }
}
scrollMenu.init();

$(document).ready(function() {
    var owl_Carousel = {
        init: function() {
            this.owlCarousel();
        },
        owlCarousel: function() {
            $(document).ready(function() {
                $(".owl-carousel").owlCarousel();
            });
            $(".owl-carousel").owlCarousel({

                loop: true,
                items: 3,
                margin: 10,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                        nav: false
                    },

                    750: {
                        items: 2,
                        nav: false

                    },
                    1000: {
                        items: 4,
                        nav: false,

                    }
                }
            });
        }
    }
    owl_Carousel.init();

});

$(document).ready(function() {
    var Scroll = {
        init: function() {
            this.Scroll();
        },
        Scroll: function() {
            $(' .to-top').click(function(e) {
                $('html, body').animate({ scrollTop: 0 });
                return false;
            });
        }
    }
    Scroll.init();
});
var Action = {
    init: function() {
        this.Action();
    },
    Action: function() {
        window.addEventListener('scroll', function(e) {
            this.back_top = document.querySelector('.to-top');
            this.position = this.window.pageYOffset;
            if (position > 200) {
                this.back_top.classList.add('action');
            } else {
                this.back_top.classList.remove('action');
            }
        });
    }
}
Action.init();
var menumobile = {
    init: function() {
        this.drop();
    },
    drop: function() {
        $('.barmobile ').click(function() {
            $('.list--menu').slideToggle();
            $('.sub-menu').css('display', 'none');
        });
        $('.kick1').click(function() {
            $('.item1').find('.sub-menu').slideToggle();
        });
        $('.kick2').click(function() {
            $('.item2').find('.sub-menu').slideToggle();
        });
        $('.kick3').click(function() {
            $('.item3').find('.sub-menu').slideToggle();
        });
        $(window).resize(function() {
            if ($(window).width() > 768) {
                $('.list--menu').removeAttr('style');
                $('.sub-menu').removeAttr('style');
            }
        });
    }
}
menumobile.init();
$(document).ready(function() {
    // When the window has finished loading create our google map below
    google.maps.event.addDomListener(window, 'load', init);

    function init() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 11,

            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(40.6700, -73.9400), // New York

            // How you would like to style the map. 
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{ "featureType": "all", "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#000000" }, { "lightness": 40 }] }, { "featureType": "all", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#000000" }, { "lightness": 16 }] }, { "featureType": "all", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#000000" }, { "lightness": 17 }, { "weight": 1.2 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 20 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 21 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#000000" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 16 }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 19 }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 17 }] }]
        };

        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(40.6700, -73.9400),
            map: map,
            title: 'Snazzy!'
        });
    }
});
var product = {
    init: function() {
        this.action();
    },
    action: function() {
        $('.dropdown .option-btn').on('click', function() {
            if ($(this).siblings('.dropdown-menu').hasClass('active')) {
                $(this).siblings('.dropdown-menu').removeClass('active').slideUp();
                $(this).removeClass('active');
                $('.list-menu').css('display', 'none');
            } else {
                $('.dropdown .dropdown-menu').removeClass('active').slideUp();
                $('.dropdown .option-btn').removeClass('active');
                $(this).addClass('active');
                $(this).siblings('.dropdown-menu').addClass('active').slideDown();

            }
        });
    }
}
product.init()