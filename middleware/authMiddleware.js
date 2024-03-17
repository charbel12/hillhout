const jwt = require('jsonwebtoken');
const secret=process.env.SECRET_KEY


function verifyToken(req, res, next) {
const token = req.header('Authorization');
console.log(token)
if (!token) return res.status(401).json({ error: 'Access denied' });
try {
 const decoded = jwt.verify(token, secret || 's{27z2v+~J&;');
 req.userId = decoded.userId;
 next();
 } catch (error) {
 res.status(401).json({ error: 'Invalid token' });
 }
 };

module.exports = verifyToken;