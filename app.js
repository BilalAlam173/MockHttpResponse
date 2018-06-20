const express = require('express')
const app = express();
const dataService = require('./dataService');
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Cache-Control,authorization,x-frame-options, Accept");
    res.header("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST,DELETE");
    next();
});
app.get('/api/office/list', (req, res) => {
    res.json(dataService.formatResponseForList(dataService.getOfficeList()));
});
app.get('/api/office/detail', (req, res) => {
    res.json(dataService.formatResponse(dataService.getOfficeDetail()));
});
app.get('/api/office/overview', (req, res) => {
    res.json(dataService.formatResponse(dataService.getofficeOverview()));
});
app.get('/api/log/auditlogs', (req, res) => {
    res.json(dataService.formatResponseForList(dataService.getAuditLogs()));
});
app.get('/api/office/users', (req, res) => {
    res.json(dataService.formatResponseForList(dataService.getOfficeUsers()));
});
app.listen(process.env.PORT || 3000, () => console.log('Example app listening on port ' + process.env.PORT || 3000))