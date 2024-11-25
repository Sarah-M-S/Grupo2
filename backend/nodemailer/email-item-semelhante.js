const transporter = require('./nodemailerTransporter');
const path = require('path');
const fs = require('fs');

function enviarEmailItemSemelhante(email, nome, itemPerdido, porcentagemSemelhanca, itemEncontrado) {
    const templatePath = path.join(__dirname, 'templates', 'email-item-semelhante-template.html');
    fs.readFile(templatePath, 'utf8', (err, data) => {
        if (err) {
            console.error("Erro ao ler o template de e-mail:", err);
            return;
        }

        // Substitui os placeholders pelo conteúdo dinâmico
        const htmlContent = data
            .replace(/{{nome}}/g, nome)
            .replace(/{{itemPerdido}}/g, itemPerdido)
            .replace(/{{itemEncontrado}}/g, itemEncontrado)
            .replace(/{{porcentagemSemelhanca}}/g, porcentagemSemelhanca);

        const mailOptions = {
            from: "'Equipe iChei' grupo2pi1a5@gmail.com",
            to: email,
            subject: `iChei - Notificação: item semelhante encontrado ${itemPerdido}`,
            html: htmlContent,
            attachments: [
                {
                    filename: "logo.png",
                    path: "./logo.png",
                    cid: "logo@cid",
                },
            ],
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log("Erro ao enviar o e-mail:", error);
            } else {
                console.log("Email enviado: " + info.response);
            }
        });
    });
}


module.exports = enviarEmailItemSemelhante;
