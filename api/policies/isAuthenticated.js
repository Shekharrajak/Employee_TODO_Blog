module.exports = function(req, res, next) {
   if (req.isAuthenticated()) {
        return res.redirect('/employee');
    }
    else{
        return res.redirect('/login');
    }
};