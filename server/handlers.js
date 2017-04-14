var api = 'https://offersvc.expedia.com/offers/v2/getOffers?scenario=deal-finder&page=foo&uid=foo&productType=Hotel'

module.exports = {
	getDataByCity: function(req, res) {
		api.find({}, function(err, city){
			if(err){
				console.log(city)
				res.json(err);
			} else {
				res.json(users);
			}
		});
	}
}