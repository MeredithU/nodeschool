module.exports = function (path, filterString, callback) {

  var fs = require('fs');
  var regex = new RegExp("\\." + filterString + "$");

  fs.readdir(path, function (err, files) {
    if (err) return callback(err)

    files.forEach(function (file) {
      if (regex.test(file))
        console.log(file)
    });
  });
};
