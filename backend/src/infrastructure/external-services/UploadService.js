const path = require('path');
const fs = require('fs');

class UploadService {
    async uploadFile(file) {
        console.log('Received file:', file);

        if (!file || !file.path) {
            throw new Error('File path is missing');
        }

        // If you need to move the file or do additional processing
        const uploadDir = path.join(__dirname, '../../../uploads');
        const uploadPath = path.join(uploadDir, file.filename);

        try {
            // The file is already on disk, you may not need to do anything here.
            // But if you want to move the file or process it further, use `fs.rename` or other methods.
            if (file.path !== uploadPath) {
                await fs.promises.rename(file.path, uploadPath);
            }

            return uploadPath; // Return the file path for further use
        } catch (err) {
            console.error('UploadService error:', err.message); // Detailed error logging
            throw new Error('File upload failed');
        }
    }
}

module.exports = UploadService;
