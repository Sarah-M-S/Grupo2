const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");


const adminAuth = (req, res, next) => {
    let token = req.headers["access-token"];
    console.log("1")

    if (!token) {
        console.log("2")

        return res.status(403).send({
            message: "No token provided!"
        });
    }
    console.log("3")

    jwt.verify(token,
        config.secret,
        (err, decoded) => {
            console.log("4")

            if (err) {
                console.log("5")

                return res.status(401).send({
                    message: "Unauthorized!",
                    
                });
            }
            req.userId = decoded.id;
            next();
        });
};

module.exports = adminAuth;
