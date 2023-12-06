import User from "./index.js";
import { expect } from "chai";
import mocha from "mocha";

const user = {
    name: "John Doe",
    id: crypto.randomUUID(),
    email: "John.Doe@gmail.com",
    address: "123 Main St - New York (NY)",
    city: "New York",
    phone: "(011)456-7890",
};

describe("creacion de usuario", () => {
    const newUser = new User(user);
    it("Verificacion de Instancia de Usuario", () => {
        expect(newUser).to.be.an("object");
        expect(newUser).to.be.an.instanceOf(User);
        expect(newUser).to.have.property("name").to.be.equal(user.name);
    });
})