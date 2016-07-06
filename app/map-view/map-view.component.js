'use strict';

angular.module('mapView').
        component('mapView', {
           templateUrl: 'map-view/map-view.template.html',
           controller: ['Map', 
               function MapViewController(Map) {
                    this.markers = Map.query();
                    var markery = this.markers;
                    var myCenter = new google.maps.LatLng(51.508742,-0.120850);
                    var self = this;
                    self.func = function initialize()
                     {
                         var mapProp = {
                           center:myCenter,
                           zoom:5,
                           mapTypeId:google.maps.MapTypeId.ROADMAP
                           };

                         var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

                         for(var i = 0; i < 2; i++)
                         {
                             var marker = new google.maps.Marker({
                                position: new google.maps.LatLng(markery[i].position.lat, markery[i].position.lng)
                             });

                             marker.setMap(map);
                         }
                         
                     }

                     google.maps.event.addDomListener(window, 'load', self.func());
           }]
});


