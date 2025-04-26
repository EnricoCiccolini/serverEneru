const array = require("../reviews")



function index(req, res) {

    res.json(array);
}


function store(req, res) {
    console.log(req.body.name)

    const idNew = array[array.length - 1].id + 1
    const newObj = {
        id: idNew,
        name: req.body.name,
        description: req.body.description,
        valutation: req.body.valutation
    }

    array.push(newObj)
    res.status(201).json(newObj)
}

module.exports = { index, store }

