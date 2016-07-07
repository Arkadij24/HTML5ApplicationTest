'use strict';

angular.module('mapView').
        component('mapView', {
           templateUrl: 'map-view/map-view.template.html',
           controller: ['Map', 
               function MapViewController(Map) {
                    var markers = Map.query();
                    var path = [];
                    
                    //var markery = this.markers;
                    var myCenter = new google.maps.LatLng(51.508742,-0.120850);
                    //var self = this;
                    //this.func = 
//                   (function(param){
//                       return param.init();
//                   })(this);
                    var mapProp = {
                          center: myCenter,
                          zoom: 5,
                          mapTypeId: google.maps.MapTypeId.ROADMAP
                          };

                        var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
                   
                   var init = function()
                    {
                        

                        for(var i = 0; i < markers.length; i++)
                        {
                        //console.log(this.markers);
                            var marker = new google.maps.Marker({
                               position: new google.maps.LatLng(markers[i].position.lat, markers[i].position.lng)
                            });

                            marker.setMap(map);
                        }
                    }
                    markers.$promise.then(function(){
                        init();
                    });
                     //google.maps.event.addDomListener(window, 'load', init());
                     
                     function getRandomColor() {
                        var letters = '0123456789ABCDEF'.split('');
                        var color = '#';
                        for (var i = 0; i < 6; i++ ) {
                            color += letters[Math.floor(Math.random() * 16)];
                        }
                        return color;
                     }
                     
                     google.maps.event.addListener(map, 'click', function(event) {
                        placeMarker(event.latLng);
                        path.push(event.latLng);
                        var flightPath=new google.maps.Polygon({
                            path: path,
                            strokeColor: getRandomColor(),
                            strokeOpacity:0.8,
                            strokeWeight:2,
                            fillColor: getRandomColor(),
                            fillOpacity:0.4,
                            map: map
                        });
                     });

                     function placeMarker(location) {
                         var marker = new google.maps.Marker({
                             position: location,
                             //animation: google.maps.Animation.BOUNCE,
                             map: map
                         });
                     }
           }]
});


