module.exports = function (req, res, next) {
    const token = req.header("Authorization");
    if (!token) return res.status(400).json({ error : "Access Denied!, no token entered"});
    if (token != "DEVCREW-BACKEND-TEST") return res.status(401).json({ error : "Unauthorized"});
    next();
};