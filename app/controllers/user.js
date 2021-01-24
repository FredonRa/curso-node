// exports.getData = (req, res) => {
//     res.send({data: 'esto viene desde users'})
// }

const model = require('../models/user')

/**
 * Obtener data de usuarios
 */

exports.getData = ((req, res) => {
    model.find({}, (err, docs) => {
        res.send({
            docs
        })
    })
})

exports.insertData = (req, res) => {
    const data = req.body
    // model.create(data, (err, docs) => {
    //     res.send({ data: docs })
    // })
    res.send({ data })
}