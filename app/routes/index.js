module.exports = (app) => {

    app.get('/', (req, res) => {

        var nomeError = req.flash("nomeError");
        var emailError = req.flash("emailError");
        var foneError = req.flash("foneError");
        var subjectError = req.flash("subjectError");
        var messageError = req.flash("messageError");

        nomeError = (nomeError == undefined || nomeError.length == 0) ? undefined : nomeError;

        res.render('index',{nomeError, emailError, foneError, subjectError, messageError});
    });
}