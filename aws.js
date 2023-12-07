// const aws = require('aws-sdk')
// const multer = require('multer')
// const multerS3 = require('multer-s3')
// const fs = require('fs')
// const s3 = new aws.S3({
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   region: process.env.AWS_DEFAULT_REGION
// })
​
// // const upload = multer({
// //   storage: multerS3({
// //     s3: s3,
// //     bucket: process.env.AWS_S3_BUCKET,
// //     contentType: multerS3.AUTO_CONTENT_TYPE,
// //     acl: 'public-read',
// //     metadata: (req, file, cb) => {
// //       cb(null, { fieldName: file.fieldname })
// //     },
// //     key: (req, file, cb) => {
// //       cb(null, 'nfts-images/' + Date.now().toString() + file.originalname)
// //     }
// //   })
// // })
​
​
// const singleAwsImageUpload = (field_name, dirName, file=null) => {
//   //console.log("singleAwsImageUpload", file);
//   try {
//     const data = fs.readFileSync('../cron/s3ImagesUpload/1zvn1o1el4wnuf2j.png', 'utf8');
//     console.log(data);
//   } catch (err) {
//     console.error(err);
//   }
  
//   process.exit();
//   // const storage = {
//   //   storage: multerS3({
//   //     s3: s3,
//   //     bucket: Config.AWS_BUCKET_NAME,
//   //     acl: 'public-read',
//   //     key: function (req, file, cb) {
//   //       let imageBaseName = `${field_name}-${Date.now() + path.extname(file.originalname)}`;
//   //       if (dirName) {
//   //         imageBaseName = `${dirName}/${field_name}-${Date.now() + path.extname(file.originalname)}`;
//   //       }
//   //       cb(null, imageBaseName);
//   //     }
//   //   }),
//   //   limits: { fileSize: 2000000 },
//   // };
//   // const upload = multer(storage).array(field_name, 20);
//   // return upload;
// }
// singleAwsImageUpload();
// // module.exports = {
// //   upload,
// //   singleAwsImageUpload
// // }
​
​
require('dotenv').config({path: './.env'});
console.log("process.env.AWS_ACCESS_KEY_ID", process.env.AWS_ACCESS_KEY_ID)
const fs = require('fs');
const aws = require('aws-sdk');
const multerS3 = require('multer-s3')
// const s3 = new aws.S3({
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   region: process.env.AWS_DEFAULT_REGION
// })
​
const s3 = new aws.S3({
  accessKeyId: "AKIAXVESBKD4IEKUVAJN",
  secretAccessKey: "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",
  region: "us-east-1"
})
const fileName = 'contacts.csv';
​
const uploadFile = () => {
  // fs.readFile('../cron/s3ImagesUpload/Coding Wallpapers 4.jpg', (err, file) => {
  //    if (err) throw err;
  //    const params = {
  //        //Bucket: process.env.AWS_S3_BUCKET, // pass your bucket name
  //        Bucket: "bleufi-testnet",
  //        Key: 'nfts-images/Coding Wallpapers 4.jpg', // file will be saved as testBucket/contacts.csv
  //        //Body: JSON.stringify(data, null, 2)
  //        acl: 'public-read',
  //       metadata: (req, file, cb) => {
  //         cb(null, { fieldName: file.fieldname })
  //       },
  //       key: (req, file, cb) => {
  //         cb(null, 'nfts-images/' + Date.now().toString() + file.originalname)
  //       }
  //    };
  //    s3.upload(params, function(s3Err, data) {
  //        if (s3Err) throw s3Err
  //        console.log(`File uploaded successfully at ${data.Location}`)
  //    });
  // });
​
  const fileContent = fs.readFileSync('../cron/s3ImagesUpload/Coding Wallpapers 4.jpg');
  const uniqid = require('uniqid'); 
  const randumFileName = uniqid();
    // Setting up S3 upload parameters
    const params = {
        Bucket: 'bleufi-testnet',
        Key: 'satcat.jpg', // File name you want to save as in S3
        Body: fileContent,
        ContentType: fileContent.type,
        Key: 'nfts-images/'+randumFileName+'.png',
        ACL: 'public-read',
        Bucket: 'bleufi-testnet'
    };
​
    // Uploading files to the bucket
    s3.upload(params, function(err, data) {
        if (err) {
            throw err;
        }
        console.log(`File uploaded successfully. ${data.Location}`);
    });
};
// //     s3: s3,
// //     bucket: process.env.AWS_S3_BUCKET,
// //     contentType: multerS3.AUTO_CONTENT_TYPE,
// //     acl: 'public-read',
uploadFile();