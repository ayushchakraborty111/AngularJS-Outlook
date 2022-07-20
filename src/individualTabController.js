
app.controller('individualTabController', individualTabController);

individualTabController.$inject = ['$scope', '$stateParams', '$timeout', 'Factory'];

function individualTabController($scope, $stateParams, $timeout, Factory)
{
    $scope.showSpinner = Factory.showSpinner();
    $scope.showSpinner = true;
    $scope.showChild = false;
    $timeout(function(){
        $scope.msgIndividual = $scope.messageArr[$stateParams.messageId];
        $scope.showSpinner = false;
        $scope.showChild = true;
    }, 2000)
}