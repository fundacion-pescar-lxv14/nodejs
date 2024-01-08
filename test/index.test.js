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
        chai.request(app)
            .get("/products/6570d28c8ef2b8a5519b4727")
            .end((err, res)=> {
                expect(res).to.have.status(200);
                expect(res).to.be.an("object");
                done();
            })
        })      
    }) 

describe("Carga de Productos", () => {
    it("Formulario de Carga", (done) => {
        chai.request(app)
            .post("/products/")
            .send({
                name: "Monitor LG Led 32\"",
                price: 54900,
                description: "Tiene una resolución de 1920px-1080px, Relación de aspecto de 16:9, Panel IPSm Su brillo es de 250cd/m², Tipos de conexión: 2 HDMI, Jack 3.5 mm, D-Sub. Comodidad visual en todo momento.",
                image: "/img/1/monitor.jpg",
                category: ["tecnologia", "informatica"],
                stock: 200,
                user: "c215714n",
                delivery: 0
            })
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            })
    })
})