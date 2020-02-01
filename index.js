
const passport = require('passport')
const session = require('express-session')


module.exports = (app) => {

    app.use(session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    }));
    // [END session]

    // OAuth2
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(require('./lib/oauth2').router);
    
}


