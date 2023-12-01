import bcrypt from "bcrypt";
import User from "../models/users.js";
import { config, resolve } from '../utils/helpers.js'

// Controladores Metodos GET
export const Home = async(req, res) => {
    res.render('home', config)
}
export const LogIn = async(req, res) => {
    res.render('layouts/login', config)
}
export const SignIn = async(req, res) => {
    res.render('layouts/signup', config)
}
// Controladores Metodos POST
export const Register = async(req, res) => {
    const { password } = req.body
    const hash = await bcrypt.hash(password[0], 8)
    const user = new User({...req.body, password: hash})
    if (password[0] != password[1]) res.render('layouts/signup', {
        ...config, err: 'RegisterError: Verifique que la contraseña cumpla con los requisitos de complejidad y sea la misma en ambos campos del formulario', type: 'warning', message: "Error de Contraseña" })
    user.save()
    .then(data => res.render('layouts/signup',{ 
        ...config, err: data, type: 'success', message: 'Usuario creado con éxito' }))
    .catch(err => res.render('layouts/signup', { 
        ...config, err, type: 'danger', message: 'Error al registrar el Usuario' }))
}
export const Validate = async(req, res) =>{
    const { username, password } = req.body
    const users = await User.find({username})
    if(users.length > 0){
        const match = await bcrypt.compare(password, users[0].password);
        if (match) res.render('layouts/profile', {
            ...config, user: resolve(users[0])
    })}
    res.render('layouts/login', {
        ...config, type: "warning", message: "Usuario o contraseña incorrectos", 
        err: "LoginError: Revise los que los datos ingresados sean correctos, en caso de no poseer cuenta, recuerde que puede registrarse desde el enlace de abajo"
    })
}