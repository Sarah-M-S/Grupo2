const express = require("express")
const router = express.Router()
const Administrador = require("./Administrador")
const bodyParser = require("body-parser")
const bcrypt = require("bcryptjs")


router.get("/admin/users/create", (req, res)=>{
    res.render("admin/users/create")
})

router.post("/users/create", (req, res)=>{

    var nome = req.body.nome
    var senha = req.body.senha
    var email = req.body.email
    var cargo = req.body.cargo
    var turno = req.body.turno
    var status = req.body.f_status

    var salt = bcrypt.genSaltSync(10);//gerando seed de encriptação
    var senhaHash = bcrypt.hashSync(senha,salt)

    Administrador.create({
        nome: nome,
        senha: senhaHash,
        email: email,
        cargo: cargo,
        turno: turno,
        f_status:status    

    }).then(()=>{
        res.redirect('/')
    }).catch((err)=>{
        res.redirect('/')
    })

})

router.get("/admin/users/list", (req, res)=>{
    Administrador.findAll().then(users=>{
        console.log(users)
        res.render("admin/users/listUsers",{users:users})
    })
})



module.exports = router;