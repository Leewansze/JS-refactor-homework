const employeeTest = require('ava');
const { Employee } = require("../src/employee")

employeeTest('shoule return name and type when tostring given alice and engineer', t => {
    //given
    const employee = new Employee('Alice', 'engineer')
    //when
    const  result = employee.toString();
    //then
    t.is(result, `Alice (engineer)`)
})

employeeTest('should return not throw exception when new a employee given alice and engineer', t => {
    const employee = new Employee('Alice', 'engineer')
    t.notThrows(() => employee)
})