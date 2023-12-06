import chai,{ expect } from "chai";
import chaiHttp from "chai-http";
import mocha from "mocha";

import app from "../index.js"
import { message, NumbersArray } from "./test.results.js"

chai.use(chaiHttp);

describe("Inicio de Aplicacion", () => {
    it("Mensaje de Bienvenida", (done) => {
        chai.request(app)
            .get("/")
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body.title).to.equals(message);
                done();
            })
    })
})

describe("Autenticacion", () => {
    it("Formulario de Registro", (done) => {
        chai.request(app)
            .get("/signup")
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            })
    })
    it("formulario de Acceso", (done) => {
        chai.request(app)
            .get("/login")
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    })
})
describe("Obtencion de Productos", () => {
    it("Todos los productos", (done) => {
        chai.request(app)
            .get("/products")
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            })
    } ) 
    it("Producto especifico", (done) => {
        NumbersArray(1,8).map((id) => {
            chai.request(app)
            .get("/products/"+id)
            .end((err, res)=> {
                expect(res).to.have.status(200);
                expect(res).to.be.an("object");
                expect(res.body.id).to.equals(id);
                expect(res.body).to.have.property("postTitle");
                done();
            })
        })      
    })   
})