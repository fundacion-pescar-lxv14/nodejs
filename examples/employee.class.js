"use strict";
var Employee = /** @class */ (function () {
    function Employee(e) {
        var _this = this;
        Object.keys(e).map(function (k) { return _this[k] = e[k]; });
    }
    // Getters
    Employee.prototype.Get = function (key) {
        return this[key];
    };
    // Setters
    Employee.prototype.Set = function (key, value) {
        this[key] = value;
    };
    Employee.prototype.getFullname = function () {
        return "".concat(this.lastname, " ").concat(this.firstname);
    };
    Employee.prototype.getAntiquity = function () {
        return new Date().getFullYear() - this.hiredAt.getFullYear();
    };
    Employee.prototype.getComplement = function () {
        var salary = this.salary;
        var antiquity = this.getAntiquity();
        return salary + (salary * (antiquity * 0.1));
    };
    return Employee;
}());

export default Employee;