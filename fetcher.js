var fs = require('fs');
var request = require('request');

var url = "https://skimdb.npmjs.com/registry/_all_docs";

fs.readFile('blah.json', "utf-8", function(err, data){
  var parsedData = JSON.parse(data);
  var parsedBody = JSON.parse(parsedData.body);
  var data = parsedBody.rows;
  var keys = Object.keys(data);
  var returnData = keys.map(function(key){
    return data[key].id;
  });

  console.log(returnData.indexOf('express'));

  // fs.writeFile('names.txt', JSON.stringify(returnData), function(err){
  //   if(err) console.log(err);
  //   else
  //     console.log('im donelol');
  // })
});

// request.get(url, function(err, response){
//   console.log(response);
//   fs.writeFile('blah.json', JSON.stringify(response), function(err){
//     if(err)console.log(err)
//     else
//       console.log('tis saved!');
//   })
// })


