const router = require('express').Router();
const fs = require("fs");

router.get('/notes', (req, res) => {
    const saveNotes = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'))
    res.json(saveNotes);
})

module.exports = router