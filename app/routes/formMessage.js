const ContactMessage = require('../model/ContactMessage');

module.exports = (app) => {

    app.post('/savesMessage', (req, res) => {
        let contactNome = req.body.name;
        let contactEmail = req.body.email;
        let contactFone = req.body.fone;
        let contactSubject = req.body.subject;
        let contactMessage = req.body.message;

        var nomeError;
        var emailError;
        var foneError;
        var subjectError;
        var messageError;

        if(contactNome == undefined || contactNome == "" || contactNome.length < 5){
            nomeError = "validação nome";
        }

        if(contactEmail == undefined || contactEmail == ""){
            emailError = "validação nome";
        }

        if(contactFone == undefined || contactFone == ""){
            foneError = "validação nome";
        }

        if(contactSubject == undefined || contactSubject == ""){
            subjectError = "validação nome";
        }

        if(contactMessage == undefined || contactMessage == "" ){
            messageError = "validação nome";
        }

        if(nomeError != undefined || emailError != undefined || foneError != undefined || subjectError != undefined || messageError != undefined){
            // res.send("ESSE FORM E MUITO FEITO")
            req.flash("nomeError",nomeError);
            req.flash("emailError",emailError);
            req.flash("foneError",foneError);
            req.flash("subjectError",subjectError);
            req.flash("messageError",messageError);
            res.redirect('/#services')
        }else{
            // res.send("SHOW DE BOLA ESSE DORM")
            ContactMessage.create({
                name: contactNome,
                email: contactEmail,
                fone: contactFone,
                subject: contactSubject,
                message: contactMessage
                
            }).then(() => {
                res.redirect('/');
            }); 
        }  
    });
}