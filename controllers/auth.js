import bcrypt from "bcrypt";
import User from "../models/users.js";
import { config, resolve } from '../utils/helpers.js'

export const LogIn = async(req, res) => {
    res.render('layouts/login', config)
}
export const Register = async(req, res) => {
    const { password } = req.body
    const hash = await bcrypt.hash(password[0], 8)
    const user = new User({...req.body, password: hash})
    if (password[0] != password[1]) res.render('layouts/signup', {
        ...config, err: 'RegisterError: Verifique que la contraseña cumpla con los requisitos de complejidad y sea la misma en ambos campos del formulario', type: 'danger', message: "Error de Contraseña" })
    else user.save()
    .then(data => res.render('layouts/signup',{ 
        ...config, err: data, type: 'success', message: 'Usuario creado con éxito' }))
    .catch(err => res.render('layouts/signup', { 
        ...config, err, type: 'danger', message: 'Error al registrar el Usuario' }))
}
export const SignIn = async(req, res) => {
    res.render('layouts/signup', config)
}
export const Validate = async(req, res) => {
    const { username, password } = req.body;
    const users = await User.find({username});
    if(users.length > 0){
        const match = await bcrypt.compare(password, users[0].password);
        if (match) res.render('layouts/profile', {...config, user: resolve(users[0])})
        else(res.render('layouts/login', {...config, message: "Contraseña incorrecta"}))
}}