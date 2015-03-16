var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope) {
    
    $scope.planeSeatData = [
		{
			seatNo: 1,
			cost: 100,
			selected: false
		},    
		{
			seatNo: 2,
			cost: 100,
			selected: false
		},    
		{
			seatNo: 3,
			cost: 100,
			selected: false
		},    
		{
			seatNo: 4,
			cost: 200,
			selected: false
		},    
		{
			seatNo: 5,
			cost: 200,
			selected: false
		},    
		{
			seatNo: 6,
			cost: 200,
			selected: false
		},    
		{
			seatNo: 7,
			cost: 400,
			selected: false
		},    
		{
			seatNo: 8,
			cost: 400,
			selected: false
		},    
		{
			seatNo: 9,
			cost: 400,
			selected: false
		}    
    ]
    
    $scope.currentCost = 0;
    $scope.selectedSeats = [];
    
    $scope.updateSeatReservation = function (cost, seatNumber){
    	
    	var selectedSeats = $scope.selectedSeats;
    	
    	if(selectedSeats.indexOf(seatNumber) == -1){
    		selectedSeats.push(seatNumber);
    		$scope.currentCost += cost;
    		$scope.planeSeatData[seatNumber -1].selected = true;
    	}
    	else{
    		for(var i = 0; i < selectedSeats.length; i++){
    			if(selectedSeats[i] == seatNumber){
    				selectedSeats.splice(i, 1);
    				$scope.planeSeatData[seatNumber -1].selected = false;
    				i--;
    			}
    		}
    		$scope.currentCost -= cost;
    	}
    }

    $scope.resetAll = function(){
    	resetStuff();
    	$scope.currentCost = 0;
        $scope.selectedSeats = [];
        
        for(var i = 0; i < $scope.planeSeatData.length; i++){
        	$scope.planeSeatData[i].selected = false;
        }
    	
    }



});

