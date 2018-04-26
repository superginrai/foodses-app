console.log('JSSS');

let app = angular.module('FoodApp', []);

app.controller('FoodController', ['$http', function ($http) {
    console.log('FoodController has been loaded')
    let self = this;

    self.snack = 'Hello Tacos!!';

    self.foods = getFoods();

    self.newFood = {};

    function getFoods() {
        $http({
            method: 'GET',
            url: '/food'
        })
            .then(function (response) {
                console.log(response);
                self.foods = response.data;
            })
            .catch(function (error) {
                console.log('error on /food GET', error);
            });
    }

    self.createFood = function () {
        console.log(self.newFood);
        $http({
            method: 'POST',
            data: self.newFood,
            url: '/food'
        })
            .then(function (response) {
                console.log(response, 'SUCCESS!');
            })
            .catch(function (error) {
                console.log('Error on /food POST', error);
            });
        getFoods();
    }

    self.saveFood = function (updateFood) {
        console.log(updateFood);
        $http({
            method: 'PUT',
            data: updateFood,
            url: '/food'
        })
        .then(function (response) {
            console.log(response, 'UPDATED!');
        })
        getFoods();
    }



    // self.deleteFood = function() {
    //     $http({
    //         method: 'DELETE'
    //         params: {food.
    //         }
    //         })

    // }

}]);