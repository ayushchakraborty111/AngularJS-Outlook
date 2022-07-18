
app.controller('individualTabController', individualTabController);

individualTabController.$inject = ['$scope', '$stateParams', '$timeout', 'Factory'];

function individualTabController($scope, $stateParams, $timeout, Factory)
{
    $scope.showSpinner = Factory.showSpinner();
    $timeout(function(){
        $scope.msgIndividual = $scope.messageArr[$stateParams.messageId];
        $scope.showSpinner = false;
    }, 2000)
    $scope.showSpinner = true;
}