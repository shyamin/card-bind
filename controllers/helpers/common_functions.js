var request = require('request'),
    fs = require('fs'),
    blend = require('@mapbox/blend');

exports.getApi = function (url) {
    return new Promise(function (resolve, reject) {
        request({ url: url, encoding: 'binary' }, (error, response, body) => {
            if (error) {
                console.log(error)
                return reject({
                    message: "cat connectin url error",
                    code: 403
                });
            } else {
                return resolve(body);
            }
        });
    });
}

exports.blendTwoImage = function (image1, image2, width, height, format) {
    return new Promise(function (resolve, reject) {
        blend([{
            buffer: new Buffer.from(image1, 'binary'), // used  Buffer.from() bcs Buffer() was deprecated
            x: 0,
            y: 0,
        }, {
            buffer: new Buffer.from(image2, 'binary'), // used  Buffer.from() bcs Buffer() was deprecated
            x: width,
            y: 0,
        }], {
            width: width * 2,
            height: height,
            format: format,
        }, (err, data) => {
            if (err) {
                return reject({
                    message: "blend error",
                    error: err
                });
            } else {
                return resolve(data);
            }
        });
    });
}

exports.writeFile = function (filepath, data, format) {
    return new Promise(function (resolve, reject) {
        fs.writeFile(filepath, data, format, (err) => {
            if (err) {
                return reject({
                    message: "file write error",
                    error: err
                });
            } else {
                return resolve(true);
            }
        });
    });
}