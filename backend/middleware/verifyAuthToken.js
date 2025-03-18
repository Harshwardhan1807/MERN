const jwt = require("jsonwebtoken");
const verifyIsLoggedIn = (req, res, next) => {
    next();
    return
    try {
        const token = req.cookies.access_token;
        if (!token) {
            return res.status(403).send("Token not found");
        }
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
            req.user = decoded;
            next();
        } catch (error) {
            return res.status(401).send("Unauthorized invalid token");
        }
    } catch (error) {
        next(error);
    }
}

const verifyIsAdmin = (req, res, next) => {
    next();
    return
    if (req.user.isAdmin) {
        next();
    } else {
        return res.status(403).send("Unauthorized admin required");
    }
}

module.exports = { verifyIsLoggedIn, verifyIsAdmin }