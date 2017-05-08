
var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

function getHTML (options, callback) {

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

// callback(dataString) === console.log(dataString)

getHTML(requestOptions, printHTML);

