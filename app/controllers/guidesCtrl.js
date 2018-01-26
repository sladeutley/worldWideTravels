'use strict';

angular.module("funWithGuides").controller("GuidesCtrl", function($scope, GuidesFactory) {
console.log('hrlp');  
    GuidesFactory.getGuides()
    .then( (guidesData) => {
        console.log('guidesData',guidesData);
        $scope.guidesList = guidesData.data.guides;
    });
});