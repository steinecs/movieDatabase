const express = require('express');
const router = express.Router();

/* url = .../movies/ */
router.route('/') 
    .get((req,res) => {
        console.log("GET /");
        res.json({'get':1});
    })
    .post((req,res) => {
        console.log("POST /");
        res.json({'post':1});
    })
    .put((req,res) => {
        console.log("PUT /")
        res.json({'put':1});
    });



// Load module 
const methodOverride = require('method-override');
// Allow form data to have functions that might not be accessible otherwise
router.use(methodOverride((req, res) => {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        const method = req.body._method;
        delete req.body._method;
        return method;
    }
}));

module.exports = router;