'use strict';

angular.module("funWithGuides", ["ngRoute"])
.config($routeProvider => {
    $routeProvider
        .when("/", {
            templateUrl: "partials/guides.html",
            controller: "GuidesCtrl"
        })
        .otherwise('/');
});