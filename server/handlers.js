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
				if (req.body.city === array[i].destination.city){
					result.push(array[i]);
				}
			}
			res.json(result)
		})
		.catch(err => console.error(err));
	}
	// getMinTripStartDate: function (req, res) {
	// 	fetch(api)
	// 	.then(res => res.json())
	// 	.then((data) => {
	// 		var array = data.offers.Hotel;
	// 		var temp = [];
	// 		var result = [];
	// 		var str = "";
	// 		for (var i = 0; i < array.length; i++) {
	// 			temp.push(array[i].offerDateRange.travelStartDate)
	// 		}
	// 		// for (var i = 0; i < temp.length; i++) {
	// 		// 	for (var i = 0; i < temp[i].length; i++) {
	// 		// 		str += temp[i]
	// 		// 	}
	// 		// 	result.push(str)
	// 		// }
	// 		res.json(temp)
	// 	})
	// 	.catch(err => console.error(err));
	// }
}