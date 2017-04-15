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
				console.log( array[i]["offerDateRange"]["lengthOfStay"] )
				if(parseInt(req.body.length) === array[i]["offerDateRange"]["lengthOfStay"]) {
					console.log("here")
					result.push(array[i])
				}
			}
			// console.log(result)
			res.json(result)
		})
		.catch(err => console.error(err));
	}
}