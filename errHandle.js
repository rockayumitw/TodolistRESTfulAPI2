function errHandle(res, code, message = '欄位未填寫正確, 或無此id', headers) {
    res.writeHead(code, headers);
        res.write(JSON.stringify({
            status: 'sucess',
            message: message
        }));
        res.end();
}

module.exports = errHandle