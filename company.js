//-----Prototype Chain-----
function Company(companyName) {
  this.companyName = companyName;
  this.products = [];
  this.employees = [];
}
Company.prototype = {
  newProduct: function(productName, price) {
    this.products.push({name: productName, price: price});
  },
  addEmployee: function(employeeName, position) {
    this.employees.push({name: employeeName, position: position})
  }
}

function Subsidiary(parentCompany, companyName, products, employees) {
  this.parentCompany = parentCompany;
  Company.call(this, companyName, products, employees);
}
Subsidiary.prototype = Company.prototype;
//add methods to Subsidiary prototype
Subsidiary.prototype.acquireSubsidiary = function(otherSubsidiary) {
  for(var i = 0; i < otherSubsidiary.employees.length; i++) {
    this.employees.push(otherSubsidiary.employees[i]);
  }
  for(var i = 0; i < otherSubsidiary.products.length; i++) {
    this.products.push(otherSubsidiary.products[i]);
  }
}

//compare prototypes
console.log(Company.prototype);
console.log(Subsidiary.prototype);

var myAmazingCompany = new Company('AmazingCompany');
var myAmazingSubsidiary = new Subsidiary('AmazingCompany', 'AmazingSubsidiary');
var myOtherAmazingSubsidiary = new Subsidiary('AmazingCompany', 'OtherAmazingSubsidiary');

myOtherAmazingSubsidiary.newProduct('Cooler-Can', 9.99);
myOtherAmazingSubsidiary.addEmployee('Michael', 'Manager');
myOtherAmazingSubsidiary.addEmployee('Sally', 'Accountant');
console.log(myOtherAmazingSubsidiary);

console.log(myAmazingSubsidiary);
myAmazingSubsidiary.acquireSubsidiary(myOtherAmazingSubsidiary);
myOtherAmazingSubsidiary = null;
console.log(myAmazingSubsidiary);
console.log(myOtherAmazingSubsidiary);





