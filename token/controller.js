const asyncHandler = require('./async')
const { createProxyMiddleware } = require('http-proxy-middleware');

exports.validator = asyncHandler(async (req, res, next) => {
    if(req.header.token) {
        console.log('1')
        next();
    } else {
        console.log('2')
        return next();
        // return res.json({
        //     verified: false
        // })
    }   
})