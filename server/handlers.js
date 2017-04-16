var api = 'https://offersvc.expedia.com/offers/v2/getOffers?scenario=deal-finder&page=foo&uid=foo&productType=Hotel'
var fetch = require('node-fetch');

module.exports = {

	getByCity: function(req, res) {
		fetch(api)
		.then(res => res.json())
		.then((data) => {
			var array = data.offers.Hotel;
			var result = [];
			for (var i = 0; i < array.length; i++) {
				if (req.body.city === array[i].destination.city){
					result.push(array[i]);
				}
			}
			res.json(result)
		})
		.catch(err => console.error(err));
	},

	getByLengthOfStay: function (req, res) {
		fetch(api)
		.then(res => res.json())
		.then((data) => {
			var array = data.offers.Hotel;
			var result = [];
			for (var i = 0; i < array.length; i++) {
				if(parseInt(req.body.length) === array[i].offerDateRange.lengthOfStay) {
					result.push(array[i])
				}
			}
			res.json(result)
		})
		.catch(err => console.error(err));
	},

	maxStarRating: function (req, res) {
		fetch(api)
		.then(res => res.json())
		.then((data) => {
			var array = data.offers.Hotel;
			var temp1 = [];
			var temp2 = [];
			var result = [];

			for (var i = 0; i < array.length; i++) {
				console.log(array[i].hotelInfo.hotelStarRating)
				if(array[i].hotelInfo.hotelStarRating) {
					temp1.push(array[i].hotelInfo.hotelName,array[i].hotelInfo.hotelStarRating)
				}
			}
			for (var i = 0; i < temp1.length; i++) {
				if(!isNaN(Number(temp1[i]))) {
					temp2.push(temp1[i])
				}
			}
			var max = Math.max(...temp2).toString()
			result.push(max, temp1[temp1.indexOf(max+".0")-1])
			res.json(result)
		})
		.catch(err => console.error(err));
	},

	minStarRating: function (req, res) {
		fetch(api)
		.then(res => res.json())
		.then((data) => {
			var array = data.offers.Hotel;
			var temp1 = [];
			var temp2 = [];
			var result = [];

			for (var i = 0; i < array.length; i++) {
				console.log(array[i].hotelInfo.hotelStarRating)
				if(array[i].hotelInfo.hotelStarRating) {
					temp1.push(array[i].hotelInfo.hotelName,array[i].hotelInfo.hotelStarRating)
				}
			}
			for (var i = 0; i < temp1.length; i++) {
				if(!isNaN(Number(temp1[i]))) {
					temp2.push(temp1[i])
				}
			}
			var min = Math.min(...temp2).toString()
			result.push(min, temp1[temp1.indexOf(min)-1])
			res.json(result)
		})
		.catch(err => console.error(err));
	}
}