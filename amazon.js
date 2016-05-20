var AWS = require('aws-sdk');

AWS.config.update({
  region: 'us-west-1'
})
var s3 = new AWS.S3();

var params = {
  Bucket: 'lenstore',
  Key: 'test'
};

s3.getObject(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data.Body.toString('utf8'));           // successful response
});

// var s3bucket = new AWS.S3({params: {Bucket: 'myBucket'}});
// s3bucket.createBucket(function(result) {
//   console.log(result)
// })

// s3bucket.createBucket(function() {
//   var params = {Key: 'myKey', Body: 'Hello!'};
//   s3bucket.upload(params, function(err, data) {
//     if (err) {
//       console.log("Error uploading data: ", err);
//     } else {
//       console.log("Successfully uploaded data to myBucket/myKey");
//     }
//   });
// });


// s3.listBuckets(function(err, data) {
//   if (err) { console.log("Error:", err); }
//   else {
//     for (var index in data.Buckets) {
//       var bucket = data.Buckets[index];
//       console.log("Bucket: ", bucket.Name, ' : ', bucket.CreationDate);
//     }
//   }
// });
