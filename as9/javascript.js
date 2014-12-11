/**
 * Author: TakYiu Lo, takyiu_lo@student.uml.edu
 * Created on: 12/10/2014
 * File: javascript.js
 * This is app module, controller and custom filter for AngularJS application.
 * Part of this javascript.js code is taken from Prof. Heines starter code.
 */
"use strict"; // to ensure that all variables are declared before use
// the number of the last column sorted, initialized to the second column
var lastSortColumnNo = 2;
// a flag indicating whether the last sort was ascending (true) or descending (false)
var lastSortDescending = false;
// set up AngularJS module, note that name must be the same as that in the
//    ng-app attribute of the html tag above
var myApp = angular.module('MoneyApp', []);
// set a constant to the JSON file path
myApp.constant("jsonUrl", "MOCK_DATA.json");
// add business logic to the app controller
myApp.controller('moneyInfo',
    /** Read JSON data using Ajax - adapted from Pro AngularJS, p. 149.
     *  @param $scope  the standard AngularJS model scope
     *  @param $http   the built-in AngularJS http object containing the get function
     *  @param jsonURL the app constant containing the JSON file path (defined above)
     */
    function($scope, $http, jsonUrl) {
        $scope.jsonData = {}; // initialize an object in the model's scope
        $http.get(jsonUrl) // perform the Ajax call
            .success(function(data) { // execute this function if the Ajax succeeds
                $scope.jsonData.data = data; // set the model's jsonData.data property to the
            }) //    data returned by the Ajax call
            .error(function(error) { // execute this function if the Ajax fails
                $scope.jsonData.error = error; // set the model's jsonData.error property to the
            }); //    error returned by the Ajax call
        // set the initial sort field (Currency_Code) and sort order (ascending)
        $scope.sortField = "Currency_Code";
        $scope.sortDescending = false;
        /**
         *  Sort column clicked in either ascending or descending order.
         *  Note that this could also be accomplished using the built-in AngularJS orderBy
         *    filter and manipulating the sort field and reverse parameters.
         *  Also note that this code could also have been incorporated into the ng-click
         *    directives on the table's th elements, but doing it here gave me more central
         *    control, and I think that this function makes what's going on clearer and
         *    therefore easier to maintain.
         *  @param colNo the number of the column header clicked
         */
        $scope.sortColumn = function(colNo) {
            $scope.sortDescending = lastSortColumnNo === colNo && !
                lastSortDescending;
            // true to sort in descending order, false to sort in ascending order
            // will be false if sorting a new column or last sort was descending
            if (colNo === 2) {
                $scope.sortField = "Currency_Code";
            } else if (colNo === 3) {
                $scope.sortField = "Money";
            } else if (colNo === 4) {
                $scope.sortField = "Credit_Car_Type";
            } else if (colNo === 5) {
                $scope.sortField = "Credit_Card_Number";
            } else if (colNo === 6) {
                $scope.sortField = "IBAN";
            } else if (colNo === 7) {
                $scope.sortField = "Bitcoin_Address";
            }
            // save the sort paramesters for the next click
            lastSortDescending = $scope.sortDescending;
            lastSortColumnNo = colNo;
        }
    });