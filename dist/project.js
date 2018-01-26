//====================================================================================================================
// Module:    funWithGuides
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  'use strict';

  console.log("hello");

  module
  .config($routeProvider => {
      $routeProvider
          .when("/", {
              templateUrl: "partials/guides.html",
              controller: "GuidesCtrl"
          })
          .otherwise('/');
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/guidesCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module.controller("GuidesCtrl", function($scope, GuidesFactory) {
  console.log('hrlp');  
      GuidesFactory.getGuides()
      .then( (guidesData) => {
          console.log('guidesData',guidesData);
          $scope.guidesList = guidesData.data.guides;
      });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/guidesFactory.js
//--------------------------------------------------------------------------------------------------------------------

  'use strict';

  module
    .factory("GuidesFactory", function($q, $http) {
      let getGuides = () => {
        return $q((resolve, reject) => {
          $http
            .get("../data/guides.json")
            .then(guides => {
              resolve(guides);
            })
            .catch(err => {
              reject(err);
            });
        });
      };

      return { getGuides };
    });


}) (angular.module ('funWithGuides', ['ngRoute']));


