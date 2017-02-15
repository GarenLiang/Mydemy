module.exports = {

  database: 'mongodb://???',
  port: 8080,
  secretKey: '???',
  facebook: {
    clientID: '???',
    clientSecret: '???',
    profileFields: ['emails', 'displayName'],
    callbackURL: 'http://localhost:8080/auth/facebook/callback',
    passReqToCallback: true,
  }

}
