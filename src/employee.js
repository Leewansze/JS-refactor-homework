const positionType = [
    'engineer',
    'manager',
    'salesman',
];

class Employee {
    constructor(name, type) {
        this.validateType(type);
        this._name = name;
        this._type = type;
    }

    validateType(type) {
        if (!positionType.includes(type)) {
            this.throwException(type);
        }
    }

    throwException(type) {
        throw new Error(`Employee cannot be of type ${type}`);
    }

    toString() {
        return `${this._name} (${this._type})`;
    }
}
module.exports = {
    Employee
}