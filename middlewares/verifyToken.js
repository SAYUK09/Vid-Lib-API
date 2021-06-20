const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    const token = req.header('auth-token');
    if(!token) return res.status(401).send('Login Karo');

    try{
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        console.log(verified)
        req.user = verified;
        console.log(verified,"veriffffy")
        next();
    }
    catch(err){
        res.status(400).send('Invalid Token');
    }
}