import User from "../models/users.js";
import { config, resolve } from '../utils/helpers.js'

export const getUsers = async (req, res) => {
    const {username} = req.params;
    const users = username ? await User.find({username}) : await User.find()
    users.length > 1 ? 
        res.render('layouts/users', {...config, users: resolve(users)}) :
    users.length > 0 ?
        res.render('layouts/profile', {...config, user: resolve(users[0])}) :
        res.render('layouts/404', {
            ...config, message: "No se encontraron resultados", err: "lamentablemente no se encontraron resultados para tu busqueda"
        })
}
export const createUser = async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.json(user);
}
export const updateUser = async (req, res) => {
    const user = await User.updateOne(req.params.id, req.body);
    res.json(user);
}
export const deleteUser = async (req, res) => {
    const user = await User.deleteOne(req.params.id);
    res.json(user);
}