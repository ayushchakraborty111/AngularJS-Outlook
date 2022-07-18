app.controller('tabController', tabController);

tabController.$inject = ['$scope', 'Factory', '$modal'];
function tabController($scope, Factory, $modal)
{
    $scope.showAlert = Factory.showAlert();
    $scope.deleteMsg = function(index)
    {
        var modal = $modal.open({
            templateUrl: 'src/template/deleteMessageModal.html',
            controller: 'deleteMessageModalController',
            resolve: {
                deleteId: function()
                {
                    return index;
                },
                msgArr: function()
                {
                    return $scope.messageArr;
                },
                showAlert: function()
                {
                    console.log($scope.showAlert);
                    return $scope.showAlert;
                }
            }
        })
        modal.result.then(function(showAlert){
            $scope.showAlert = showAlert;
        })
    }
    $scope.closeAlert = function()
    {
        $scope.showAlert = false;
    }
}