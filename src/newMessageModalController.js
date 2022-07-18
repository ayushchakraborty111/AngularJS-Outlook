app.controller('newMessageModalController', newMessageModalController);

newMessageModalController.$inject = ['$scope', '$modalInstance', 'Factory', 'index'];

function newMessageModalController($scope, $modalInstance, Factory, index)
{
    $scope.folder = Factory.getAllFolder();
    $scope.content = Factory.content();
    $scope.subject = Factory.subject();
    $scope.ok = function()
    {
        $scope.folder[index].messages.push({
            content: this.content,
            subject: this.subject
        })
        $modalInstance.close();
    }
    $scope.cancel = function()
    {
        $modalInstance.dismiss('cancel');
    }
}