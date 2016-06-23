(function() {
    'use strict';

    var heatMap = angular
        .module('tom.heat-map',[]);

    heatMap.controller('HeatMapController', function createHeatMap($scope, $http) {
      $http.get('http://tomkennedy.herokuapp.com/api/cousins').success(function(data) {
          google.charts.load('current', {'packages':['geomap']});
          google.charts.setOnLoadCallback(drawMap);

          const aspectRatio = 1.6023054755; // width/height
          const height = 700; //px
          var cousins = data;

          function drawMap() {
            var data = google.visualization.arrayToDataTable(
              _.concat([['Country', 'Percent']],
                _.map(cousins, function(countryData) {
                  return [countryData.country, countryData.percent];
                })
              )
            );

            var options = {};
            options['dataMode'] = 'regions';
            options['width'] = height*aspectRatio + 'px';
            options['height'] = height + 'px';

            var container = document.getElementById('regions_div');
            var geomap = new google.visualization.GeoMap(container);

            geomap.draw(data, options);
          };
        });
      }
    )
    
    .directive('hmDir', hmDir)
    
    function hmDir() {
        return {
            templateUrl: 'heat-map/heat-map.html',
            restrict: 'E',
            scope: {}
        };
    }
  }
)();