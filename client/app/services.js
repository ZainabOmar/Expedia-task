angular.module('expedia.services', [])

.factory('Expedia', function ($http) {
  return {

    getByDestination : function(city){
      return $http({
        method: 'POST',
        url: '/api/getByDestination',
        data: city
      })
      .then(function (res) {
        return res;
      })
      .catch(function(err){
        if(err) {
          return {status:500};
        }
      });
    }
  }
})