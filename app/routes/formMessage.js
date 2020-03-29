const ContactMessage = require('../model/ContactMessage');

module.exports = (app) => {

    app.post('/savesMessage', (req, res) => {
        let contactNome = req.body.name;
        let contactEmail = req.body.email;
        let contactFone = req.body.fone;
        let contactSubject = req.body.subject;
        let contactMessage = req.body.message;

        ContactMessage.create({
            name: contactNome,
            email: contactEmail,
            fone: contactFone,
            subject: contactSubject,
            message: contactMessage
            
        }).then(() => {
            res.redirect('/');
        });  
    });
}