module.exports = {
	
	employee: function (req, res, next) {
		var searchQuery = req.param('searchQuery');
		//var profession = req.param('profession');
		if( searchQuery.length == 0) {
			Employee.find()
			.sort({createdAt: 'desc'})
			.exec(function (err, results) {
				res.view({
					results: results
				});
			});
		} else if (searchQuery.length > 0) {
			Employee.find()
			.where({
				or: [
					{name: {contains: searchQuery}},
					{email: {contains: searchQuery}},
					{phone: {contains: searchQuery}}
					
				]
			})
			.sort({createdAt: 'desc'})
			.exec(function (err, results) {
				res.view({
					results: results
				});
			});
		} 
	}  
};