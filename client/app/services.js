angular.module('expedia.services', [])

.factory('Expedia', function ($http) {
  return {

    getByDestination : function(){
      return $http({
        method: 'GET',
        url: '/api/getByDestination',
      })
      .then(function (res) {
        console.log(res.offers);
        return res;
      })
      .catch(function(err){
        if(err) {
          console.log(err);
          throw err;
        }
      });
    }
  }
})