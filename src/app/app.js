import '../../node_modules/angular-material/angular-material.css';
import angular from 'angular';
import 'angular-route';
import ngMaterial from 'angular-material';
import ngMessages from 'angular-messages';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import HomeModule from './components/home/home.module';
import WelcomeModule from './components/welcome/welcome.module';
import MainDirective from './main.directive';
import MainCtrl from './main.controller';

const MODULE_NAME = 'app';
const ASSETS = ['ngRoute', 'ngMaterial', 'ngMessages', 'ngAnimate', 'ngAria'];
const APP_MODULES = ['WelcomeModule', 'HomeModule'];
const MODULE_DEPS = ASSETS.concat(APP_MODULES);

MainCtrl.$inject = ['$mdSidenav'];

angular.module(MODULE_NAME, MODULE_DEPS)
  .directive('main', MainDirective)
  .controller('MainCtrl', MainCtrl)
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        template: '<home></home>'
      })
      .when('/welcome', {
        template: '<welcome></welcome>'
      })
  })

export default MODULE_NAME;