/* jshint browser : true */
import { Cosa } from '/js/cosa.js';

var App = (function () {
    var api = {};
    
    api.init = function () {
        console.log("initializing everything");
        Cosa.init();
    };
    
    return api;
})();

(function () {
    "use strict";
    document.addEventListener( 'DOMContentLoaded', App.init );
})();