const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });
const fs = require('fs');
const uuid = require('uuid-v4');

const gcConfig = {
  projectId: 'beautiful-places-79ff6',
  keyFileName: 'beautiful-places.json'
};

const gcs = require('@google-cloud/storage')(gcConfig);
exports.storeImage = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    const body = JSON.parse(request.body);
    fs.writeFileSync('/tmp/uploaded-image.jpg', body.image, 'base64', error => {
      console.log(error);
      return response.status(500).json({ error: error });
    });
    const bucket = gcs.bucket('beautiful-places-79ff6.appspot.com');
    const uuid = uuid();
    bucket.upload('/tmp/uploaded-image.jpg', {
      uploadType: 'media',
      destination: '/places/' + uuid + '.jpg',
      metadata: {
        contentType: 'image/jpeg',
        firebaseStorageDownloadTokens: uuid
      }
    });
  });

  response.send('Hello from Firebase!');
});
