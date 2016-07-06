'use strict';

angular.module('core.map').
    factory('Map', ['$resource',
        function($resource) {
            return $resource('markers/:markerId.json', {}, {
                query: {
                    method: 'GET',
                    params: {markerId: 'markers'},
                    isArray: true
                }
            });
        }
]);

