import User from '../models/users.js'

export const createUser = async(req, res) => {
const newUser = req.body;
if(Object.keys(req.body.length != 0)) User.Create(newUser, (err, data) =>
    err ? res.json(err) :
    res.json({
        status: "OK",
        code: 200,
        message: "El usuario ha sido agregado Exitosamente",
        data,
    })
)}
export const getUsers = (req, res) => { 
req.params.id ?
    User.Read(req.params.id, (err, data) => 
        err ? res.json(err): res.json(data)
    ) :
    User.Read(null, (err, data) => 
        err ? res.json(err) : res.json(data)
    )
}
export const updateUser = (req, res) => { 
if(req.params.id) User.Update(req.params.id, req.body, (err, data) =>
    err ? res.json(err) : 
    res.json({
        status: "OK",
        code: 200,
        message: "El usuario ha sido actualizado",
        data,
    })
)} 
export const deleteUser = (req, res) => { 
if(req.params.id) User.Delete( req.params.id, (err, data) => 
    err ? res.json(err) :  
    res.json({
        status: "OK",
        code: 200,
        message: "El usuario ha sido eliminado",
    })
)}