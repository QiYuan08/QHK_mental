const router = require('express').Router();
const Diary = require('../models/diary');

router.get('/details', (req, res) => {
    let body = req.body;
    let id = body['id'];

    return Diary.findById(id).exec()
    .then((result) => {
        res.status(200).send(result);

    })
    .catch((err) => {
        res.status(400).send(err);
        
    });

})

router.post('/newDiary', (req, res) => {
    let body = req.body;
    let title = body['title'];

    
})

module.exports = router;