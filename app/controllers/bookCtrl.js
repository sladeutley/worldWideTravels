'use strict';

angular.module("funWithGuides").controller("BookCtrl", function($scope, GuidesFactory) {

    GuidesFactory.getGuides()
    .then( (guidesData) => {
        console.log('guidesData',guidesData);
        $scope.guidesList = guidesData.data.guides;
    });
});