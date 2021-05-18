let { join } = require('path'),
    helpers = require('../helpers/common_functions'),
    argv = require('minimist')(process.argv.slice(2));

let {
    greeting = 'Hello',
    who = 'You',
    width = 400,
    height = 500,
    color = 'Pink',
    format = 'jpeg',
    size = 100,
} = argv;

module.exports = {

    bindCat: function (req) {
        var promise = new Promise(async function (resolve, reject) {
            try {
                greeting = (req.query.greeting) ? req.query.greeting : greeting;
                who = (req.query.who) ? req.query.who : who;
                width = (req.query.width) ? Number(req.query.width) : width;
                height = (req.query.height) ? Number(req.query.height) : height;
                color = (req.query.color) ? req.query.color : color;
                format = (req.query.format) ? req.query.format : format;
                size = (req.query.size) ? Number(req.query.size) : size;

                let url1 = 'https://cataas.com/cat/says/' + greeting + '?width=' + width + '&height=' + height + '&color' + color + '&s=' + size;
                let image1 = await helpers.getApi(url1);

                let url2 = 'https://cataas.com/cat/says/' + who + '?width=' + width + '&height=' + height + '&color' + color + '&s=' + size;
                let image2 = await helpers.getApi(url2);

                let blendImage = await helpers.blendTwoImage(image1, image2, width, height, format);

                const fileOut = join(process.cwd(), `/cat-card.jpg`);

                let fileWrite = await helpers.writeFile(fileOut, blendImage, "binary");
                console.log("The file was saved!")
                return resolve({ message: "The file was saved!" })
            } catch (error) {
                return reject({
                    success: 0,
                    error: (error.message) ? error.message : JSON.stringify(error),
                    code: 409
                });
            }
        });
        return promise;
    },
}