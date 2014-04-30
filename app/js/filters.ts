/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
'use strict';

/* Filters */
angular.module('phonecatFilters', []).filter('checkmark', function () {
    return function (input) {
        return input ? '\u2713' : '\u2718';
    };
});