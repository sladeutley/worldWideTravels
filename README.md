# worldWideTravels

## Requirements

For this project you need to use Angular to list a collection of travel guides in the DOM.
Build an application that has one view, and one controller that will be responsible for retrieving the data and exposing it for use in the view. The view needs to list all book titles, which type of book it is, and the price for the book.

Fetch your data using an http call that returns a promise. Save the returned data as a property of the `$scope` object and loop through it to display the guidebook info to the user.

Here's a list of some things to include in your app in the appropriate spots:
+ Directives:
  + `ng-app="<your module name>"`
  + `ng-controller="bookCtrl"`
  + `ng-repeat="book in books"`
+ A call to the data folder for `guides.json` using `$http`
+ Use the `$q` service to wrap your http call in a promise
+ `$scope.books = <your array of guide books data>`

# Factories

1. Make a new branch called `guide-factory`  
1. Separate the database interactions from the DOM interactions, and make your guidebook data available to your controller (and other, future controllers) by moving the http call for `guides.json` from `bookCtrl.js` into `guideFactory.js`
1. Inject your factory into `bookCtrl.js` as a dependency

# Routing

You are going to use `ngRoute` to load the HTML for diplaying guide books from a partial into `index.html`

1. Make a new branch called `guide-routing`  
1. Include the separate `angular-route` provider into `index.html`: `<script src="my-path-to-angular-route.min.js"></script>`
1. Inject it into your app as a dependency: `var myApp = angular.module("MyAppName", ['ngRoute']);`
1. Setup routing in app.js using the config method: `app.config(['$routeProvider'....etc`
1. Remember to remove `ng-controller` references from index.html. Angular-route will now handle binding controllers to partials.
