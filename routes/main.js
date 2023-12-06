import { Router } from 'express'

const mainRouter = Router()

mainRouter.get("/", (req, res) => {
    res.json({
        title: "Bienvenido a Pescar Shops"
    })
})
mainRouter.get("/signup", (req, res) => {
    res.json({
        title: "Formulario de Registro"
    })
})
mainRouter.get("/login", (req, res) => {    
    res.json({
        title: "Formulario de Acceso"
    })
})

export default mainRouter;