const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT || 8080);

//path location strategy

app.use('/*', function (req, res, next) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
})

console.log('console listening');