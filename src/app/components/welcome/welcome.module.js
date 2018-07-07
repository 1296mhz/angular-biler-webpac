//import './welcome.css';
import angular from 'angular';

let WelcomeComponent = {
    template: require('./welcome.tmpl.html'),
    controller: _welcomeController
};

function _welcomeController() {
    this.welcomeText = "Welcome page!"
    this.greeting = 'Webpack Angular Starter';
}

export default angular.module('WelcomeModule', [])
    .component('welcome', WelcomeComponent)