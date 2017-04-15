var api = 'https://offersvc.expedia.com/offers/v2/getOffers?scenario=deal-finder&page=foo&uid=foo&productType=Hotel'
var fetch = require('node-fetch');

module.exports = {
	getByDestination: function(req, res) {
		fetch(api)
		.then(res => res.json())
		.then((data) => {
			var array = data.offers.Hotel;
			var result = [];
			for (var i = 0; i < array.length; i++) {
				result.push(array[i].destination.longName);
			}
			res.json(result)
		})
		.catch(err => console.error(err));
	},
	getMinTripStartDate: function (req, res) {
		fetch(api)
		.then(res => res.json())
		.then((data) => {
			var array = data.offers.Hotel;
			var result = "";
				result = Math.min(...array)
		})
		.catch(err => console.error(err));
	}
}