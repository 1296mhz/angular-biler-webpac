//import './welcome.css';
import angular from 'angular';

_mainController.$inject = ['$mdSidenav'];

let MainComponent = {
    template: require('./main.tmpl.html'),
    controller: _mainController
};

function _mainController($mdSidenav) {
    this.$mdSidenav = $mdSidenav;
    this.welcomeText = "Main page!"
    this.greeting = 'Webpack Angular Starter';
    this.toggleLeft = this.buildToggler('left');
    this.userProfile = {
        username: "AngularUser",
        role: "Administrator"
    }

    this.links = [
        {
            "uisref": "root",
            "icon": "favorite"

        },
        {
            "uisref": "home",
            "icon": "home"

        },
        {
            "uisref": "about",
            "icon": "account_box"
        }
    ];
    this.buildToggler = function (componentId) {
        return function () {
            this.$mdSidenav(componentId).toggle();
        };
    }
}

export default angular.module('MainModule', [])
    .component('main', MainComponent)