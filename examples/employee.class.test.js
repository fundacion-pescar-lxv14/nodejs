/** Sintaxis Clasica de NodeJS
 * const Employee = require('./employee.class.js')
 * const expect = require('chai').expect
 * const mocha = require('mocha')
 * const example = require('./employee.class.example.js')
*/

/** Sintaxis de Modulos de ES6 */ 
import Employee from './employee.class.js';
import chai, { expect } from 'chai';
import mocha from 'mocha';
import example from './employee.example.js';

const employee = new Employee(example)
const [fullname, antiquity, complement] = [ employee.getFullname(), employee.getAntiquity(), employee.getComplement() ]

describe('Verificacion de la Clase Empleado', () => {
    it('Creacion de Empleado', () => {
        expect(employee).to.be.an.instanceof(Employee)
    })
    it('Obtener nombre completo', () => {
        expect(fullname).to.equal('Perez Juan')
        expect(fullname).to.be.a('string')
    })
    it('Antigüedad expresada en años', () => {
        expect(antiquity).to.equal(9)
        expect(antiquity).to.be.a('number')
    })
    it('Complemento Salarial', () => {
        expect(complement).to.equal(3800),
        expect(complement).to.be.a('number')
    })
})