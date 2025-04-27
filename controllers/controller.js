const array = require("../reviews")

function index(req, res) {

    res.json(array);
};

function store(req, res) {
    console.log(req.body.name)

    let check = false

    if (req.body.valutation < 1 || req.body.valutation > 5) {
        check = true
    };

    array.forEach(element => {
        if (element.email === req.body.email) {

            check = true
        }

    });

    if (check) {
        res.status(400).json('email gia presente in archivio')
    } else {
        const idNew = array[array.length - 1].id + 1
        const newObj = {
            id: idNew,
            email: req.body.email,
            name: req.body.name,
            description: req.body.description,
            valutation: req.body.valutation
        }
        array.push(newObj)
        res.status(201).json(newObj)
    }
};

function destroy(req, res) {
    const id = parseInt(req.params.id)
    const itemToDelete = array.find(itemToDelete => itemToDelete.id === id)
    if (!itemToDelete) {
        return res.status(404).json({ message: 'recensione non trovata' })
    }
    array.splice(array.indexOf(itemToDelete), 1)
    res.status(204).json()
    console.log(array)
};

function update(req, res) {
    const currentId = Number(req.params.id);

    const currentPost = array.find(array => array.id === currentId);
    currentPost.email = req.body.email;
    currentPost.name = req.body.name;
    currentPost.description = req.body.description;
    currentPost.valutation = req.body.valutation;

    if (currentPost !== -1) {
        console.log(currentPost)
        res.json(currentPost)
    } else {
        res.status(204).json({
            status: 404,
            error: "invalid id",
            message: "inserisci un id valido"
        })
    };
};

module.exports = { index, store, destroy, update }

