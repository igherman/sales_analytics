const csv = require('csv-parser');
const fs = require('fs');
const importService = require('../services/import');

exports.getImport = (req, res, next) => {
    res.render('import', { result: null });
}

exports.postImport = (req, res, next) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    let processingResult;
    const filePath = req.files.sampleFile.tempFilePath;
    const importType = req.body.importType;
    fs.createReadStream(filePath)
        .pipe(csv())
        .on("data", data => {
            switch (importType) {
                case 'users':
                    importService.importUsers(data);
                    processingResult = 'User import processed.';
                    break;
                case 'products':
                    importService.importProducts(data);
                    processingResult = 'Products import processed.';
                    break;
                case 'transactions':
                    processingResult = 'Transactions import not supported.';
                    break;
                default:
                    processingResult = 'This import is not supported.'; 
            }
        })
        .on('end', () => {
            return res.send('File uploaded. Processing result:' + processingResult);
        })
        .on('error', err => {
            console.log('Failed to process file');
            return res.status(500).send(err);
        });
}