const router = require('express').Router();
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');


router.get('/notes', (req, res) => {
    const saveNotes = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'))
    res.json(saveNotes);
});

router.post('/notes', (req, res) => {
    const saveNotes = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'))
    console.log(req.body)
    saveNotes.push({ ...req.body, id: uuidv4() })
    fs.writeFileSync('./db/db.json', JSON.stringify(saveNotes))
    res.json({ message: "It worked!" })
})

router.delete('/notes/:id', (req, res) => {
    const saveNotes = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'))


    const filteredNotes = saveNotes.filter(note => note.id !== req.params.id)
    console.log(filteredNotes)
    fs.writeFileSync('./db/db.json', JSON.stringify(filteredNotes))
    res.json({ message: "It worked!" })
})

module.exports = router