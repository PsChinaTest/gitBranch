var app=angular.module('app',[])
	app.controller('con1',function($scope){
		$scope.mes="abc"
		$scope.inp1="0"
		$scope.box="box"
		$scope.mes=function(){
			return this.inp1
		}
		$scope.add=function(){
			this.inp1++
			return this.inp1
		}
		$scope.del=function(){
			this.inp1--
			if (this.inp1 < 0){
				this.inp1 = 0
			} 
			return this.inp1
		}
	})