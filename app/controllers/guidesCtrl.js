'use strict';

angular.module("funWithGuides").controller("GuidesCtrl", function($scope, GuidesFactory) {
    GuidesFactory.getGuides()
    .then( (guidesData) => {
        console.log('guidesData',guidesData);
        $scope.guidesList = guidesData.data.guides;
    });
});