app.controller('deleteMessageModalController', deleteMessageModalController);

deleteMessageModalController.$inject = ['$modalInstance', '$scope', 'deleteId', 'msgArr', 'showAlert', 'Factory'];
function deleteMessageModalController($modalInstance, $scope, deleteId, msgArr, showAlert, Factory)
{
    $scope.ok = function()
    {
        msgArr.splice(deleteId, 1);
        $scope.showAlert = true;
        $modalInstance.close($scope.showAlert);
    }
    $scope.cancel = function()
    {
        $modalInstance.dismiss('cancel');
    }
}