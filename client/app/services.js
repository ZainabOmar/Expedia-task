angular.module('expedia.services', [])

.factory('Expedia', function ($http) {

  return {
    getByCity : function(city){
      return $http({
        method: 'POST',
        url: '/api/getByCity',
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
    },

    getByLengthOfStay : function (length) {
      return $http({
        method: 'POST',
        url: '/api/getByLengthOfStay',
        data: length
      })
      .then(function (res) {
        return res;
      })
      .catch(function(err){
        if(err) {
          return {status:500};
        }
      });
    },

    maxStarRating : function () {
      return $http({
        method: 'GET',
        url: '/api/maxStarRating'
      })
      .then(function (res) {
        return res;
      })
      .catch(function(err){
        if(err) {
          return {status:500};
        }
      });
    },

    minStarRating : function () {
      return $http({
        method: 'GET',
        url: '/api/minStarRating'
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