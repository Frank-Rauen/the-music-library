const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const Googler = require('../models/googler');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
},
function(accessToken, refreshToken, profile, cb){
    Googler.findOne({'googleId': profile.id}, function(err, googler) {
        if(err) return cb(err);
        if (googler) {
            return cb(null, user); 
        } else {
            const newGoogler = new Googler({
                name: profile.displayName,
                email: profile.emails[0].value,
                googleId: profile.id
            });
            newGoogler.save(function(err){
                if (err) return cb(err);
                return cb(null, newGoogler);   
            });
        }
    });
}
));
passport.serializeUser(function(user,done){
    done(null, user.id);
});

passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        done(err, user)
    });
});