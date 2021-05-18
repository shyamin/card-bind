
var catController = require('../cat/cat');

module.exports = {
    bindCat: function (req, res) {
        catController.bindCat(req)
            .then(function (data) {
                return res.status(200).json(data);
            }).catch(function (error) {
                return res.status(error.code).json(error);
            });
    },
}