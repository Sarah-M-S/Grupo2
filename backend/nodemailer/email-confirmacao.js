const transporter = require('./nodemailerTransporter');
const fs = require('fs');
const path = require('path');

function enviarEmailConfirmacao(email, nome, itemPerdido) {
    const templatePath = path.join(__dirname, 'templates', 'email-confirmacao-template.html');
    fs.readFile(templatePath, 'utf8', (err, data) => {
        if (err) {
            console.error("Erro ao ler o template de e-mail:", err);
            return;
        }

        // Substitui os placeholders pelo conteúdo dinâmico
        const htmlContent = data
            .replace(/{{nome}}/g, nome)
            .replace(/{{itemPerdido}}/g, itemPerdido);

        const mailOptions = {
            from: "'Equipe iChei' grupo2pi1a5@gmail.com",
            to: email,
            subject: `iChei - Notificação - item semelhante encontrado: ${itemPerdido}`,
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

module.exports = enviarEmailConfirmacao;
