const app = require('./config/server');

const routeIndex = require('./app/routes/index')(app);
const routeMassege = require('./app/routes/formMessage')(app);


app.listen(3001, () => {
    console.log("Servidor ON");
});