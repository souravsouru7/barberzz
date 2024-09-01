const path = require('path');
const fs = require('fs');

class FileUploadService {
    async uploadFile(file) {
        const uploadPath = path.join(__dirname, '..', '..', 'uploads', file.name);
        await file.mv(uploadPath);
        return uploadPath; // You might want to return the URL if serving files via a static server
    }
}

module.exports = FileUploadService;
