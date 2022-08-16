const employee = {
    name: "Bob",
    streetAddress: "212 Mark Street", 
}

function updateEmployeeWithKeyAndValue(object, key, value) {
    const newEmployee = {...object};
    newEmployee[key]=value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
    object[key]=value;
    return object;
}

function deleteFromEmployeeByKey(object, key) {
    const newEmployee2 = {...object};
    delete newEmployee2[key];
    return newEmployee2;
}

function destructivelyDeleteEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}