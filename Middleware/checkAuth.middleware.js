module.exports = function (req, res, next) {
    const token = req.header("Authorization");
    if (!token) return res.status(400).send("Access Denied!, no token entered");
    if (token != "DEVCREW-BACKEND-TEST") return res.status(401).send("Unauthorized");
    next();
};