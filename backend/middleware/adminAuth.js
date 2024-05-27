
function adminAuth(req, res, next){
    if(req.session.token){
        next();
    }

    else{
        res.status(401).send('<h1>ERRO 401<hr></h1> Acesso restrito a administradores.');
    }
    
};

module.exports = adminAuth;
