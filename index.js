// // Write your solution in this file!
const employees = {
    name: "Danielle",
    streetAddress: "1 Cool Court"
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = {...obj};
    newObj[key]=value;
    return newObj;
}

const employee = updateEmployeeWithKeyAndValue(
    employees,
    "zipCode",
    "90210"
  );

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key]=value;
    return obj;
}

destructivelyUpdateEmployeeWithKeyAndValue(employees,"unit","2");

function deleteFromEmployeeByKey(obj,key) {
    const newObj = {...obj};
    delete newObj[key];
    return newObj;
}

const deleteEmployee = deleteFromEmployeeByKey(employees,"streetAddress");

function destructivelyDeleteFromEmployeeByKey(obj,key){
    delete obj[key];
    return obj;
}

