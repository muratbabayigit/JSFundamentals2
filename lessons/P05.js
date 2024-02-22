//objects

var customer={
    firstName:"Ahmet",
    lastName:"Bulut",
    phoneNumber:90555555555
}

console.log(customer)
console.log(customer.firstName)
console.log(customer.phoneNumber)
console.log(customer['lastName'])
console.log()
customer.firstName="Tarık"
console.log(customer)
console.log(customer.firstName)
console.log()
console.log(`${customer.firstName} ${customer.lastName} ${customer.phoneNumber}`)