app.controller('timeController', timeController);

timeController.$inject = ['$scope'];

function timeController($scope)
{
    $scope.time = faker.date.between('2010-01-01', '2022-01-01');
}