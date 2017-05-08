
var https = require('https');

module.exports = function getHTML (options, callback) {
    /* Your code here */
    https.get(options, function (response) {
  response.setEncoding('utf8');

  response.on('data', function (data) {
    var dataString = String(data);
    callback(dataString);
  });

  response.on('end', function() {
    console.log('Response stream complete.');

  });

});

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};


// getHTML(requestOptions, printHTML);