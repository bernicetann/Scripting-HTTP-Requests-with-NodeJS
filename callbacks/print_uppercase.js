var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
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

function printUpperCase (html) {
  var upperCase = html.toUpperCase();
  console.log(upperCase);
}

getHTML(requestOptions, printUpperCase);