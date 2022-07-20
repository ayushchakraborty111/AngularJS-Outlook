app.controller('myCtrl', function($scope, Factory, $modal, $log, $timeout){
    $scope.folder = Factory.getAllFolder();
    $scope.showFolderAlert = Factory.showAlert();
    $scope.addFolder = function()
    {
        $scope.show = false;
        var modal = $modal.open({
            templateUrl: 'src/template/folderAddition.html',
            controller: 'folderController',
            resolve: {
                showFolderAlert: function()
                {
                    return $scope.showFolderAlert;
                }
            }
        })
        modal.result.then(function(showFolderAlert){
            $scope.showFolderAlert = showFolderAlert;
        })
    }
    $scope.closeAlert = function()
    {
        $scope.showFolderAlert = false;
    }
    $scope.closeMessageAlert = function()
    {
        $scope.showMessageAlert = false;
    }
    $scope.messageArr = Factory.messagesArray();
    $scope.showMesg = Factory.showMesg();
    $scope.messages = function(index)
    {
        $scope.messageArr = [];
        $scope.showSpinner = true;
        $scope.showMesg = false;
        $scope.styleDiv = {
            "background-color": "rgb(240, 240, 240)"
        }
        Factory.getMessage(index).then(function(data){
            if(data.length!=0)
            {
                $scope.messageArr = data;
                $scope.showSpinner = false;
                $scope.showMesg = false;
                $scope.styleDiv = {
                    "background-color": "white"
                }
            }
            else
            {
                $scope.showMesg = true;
                $scope.showSpinner = false;
                $scope.styleDiv = {
                    "background-color": "white"
                }
            }
        }).catch(function(err){
            console.log(err);
        })
    }
    $scope.messages(0);
    var index = $scope.folder.findIndex(x=>x.name === 'Sent_Items');
    $scope.showAlert = Factory.showAlert();
    $scope.newMessage = function()
    {
        var modal = $modal.open({
            templateUrl: 'src/template/newMessageAddition.html',
            controller: 'newMessageModalController',
            resolve: {
                index: function()
                {
                    return index;
                }
            }
        })
        modal.result.then(function(){
            $log.info('Modal dismissed at '+ new Date());
        })
    }
})


// $timeout(function () {
//     $scope.messageArr = data;
//     $scope.showSpinner = false;
//     $("#div1").removeClass('cssOpaque');
// }, 2000);
// $("#div1").addClass('cssOpaque');
// $scope.messageArr = [];
// $scope.showSpinner = true;