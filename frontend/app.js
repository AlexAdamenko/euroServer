/**
 * Created by AlexAdamenko on 16/03/16.
 */


// app.js

'use strict';

angular.module('routerApp', ['ui.router', 'routerApp.mainPageController', 'routerApp.gamesController'])



    .config(function($stateProvider, $urlRouterProvider, $locationProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider


        // HOME STATES AND NESTED VIEWS ========================================
        $stateProvider.state('home', {

                url: '/home',
                templateUrl: '/pages/tokensPage.html',
                controller: 'mainPageController'

            })

            .state('catalogue', {
                url: '/catalogue',
                templateUrl: '/pages/gamesPage.html',
                controller: 'gamesController'

            })

    })
