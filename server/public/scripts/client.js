console.log('JSSS');

let app = angular.module('FoodApp',[]);

app.controller('FoodController', function(){
    console.log('FoodController has been loaded') 
    let self = this;
    self.snack = 'Hello Tacos!!';
    }
);

function snackTime() {
    $http({
        type: 'GET',
        url: '/food'
    })
}