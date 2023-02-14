'use strict';
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);
    }
});
const filefilter = (req, file, cb) => {

    console.log(file.mimetype, "dfsdfdsfdsfds")
    if (file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg' ||
        file.mimetype === 'application/vnd.android.package-archive' ||
        file.mimetype === 'application/pdf'||
        file.mimetype==='audio/mpeg' ||
        file.mimetype==='text/html'||
        file.mimetype==='image/gif'||
        file.mimetype==='video/mp4'|| 
        file.mimetype==='image/webp'
        
        ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

const upload = multer({ storage: storage, fileFilter: filefilter });

module.exports = { upload }