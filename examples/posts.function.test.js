import Post from './posts.function.js'
import { expect } from 'chai'
import mocha from 'mocha'
import example from './posts.function.example.js'

const newPost = new Post(example);
let c = newPost.get('categories').length

describe("Funciones de Publicacion", () => {
    it("Creacion del Objeto", () => {
        expect(newPost).to.be.an('object')
        expect(newPost).to.be.an.instanceof(Post)
    })
    it("obtencion de valores", () => {
        expect(newPost.get('postTitle')).to.be.equal("Teclado Mecanico")
        expect(newPost.get('postTitle')).to.be.a("string")

        expect(newPost.get('price')).to.be.equal(8000)
        expect(newPost.get('price')).to.be.a("number")

        expect(newPost.get('categories')).to.be.an("array")
    })
    it("modificacion de valores", () => {
        expect(newPost.set('stock', 200)).to.be.a("number")
        expect(newPost.set('postTitle', "Teclado Redragon")).to.be.a("string")
    })
    it("agregar categorias", () => {
        newPost.addNew('perifireficos')
        expect(newPost.get('categories').length).to.be.equal(++c)
    })
    it("eliminar categorias", () => {
        newPost.remove("tecnologia")
        expect(newPost.get('categories')).to.not.include("tecnologia")
        expect(newPost.get('categories').length).to.be.equal(--c)
    })
    it("actualizar categorias", () => {
        newPost.update("computacion", "informatica")
        expect(newPost.get("categories")).to.include("informatica")
        expect(newPost.get("categories").length).to.be.equal(c)
    })
})