 class Employee {
  name = "";
  displayInfo() {
    console.log(`name: ${this.name}`);
  }
  constructor(name) {
    this.name = name;
  }
}
class Manager extends Employee {
  department = "";
  displayInfo() {
    console.log(`name: ${this.name}, dapartment: ${this.department}`);
  }
  constructor(name, dapartment) {
    super(name);
    this.department = dapartment;
  }
}
const employee = new Employee("John Smith");
employee.displayInfo(); // "Name: John Smith"

const manager = new Manager("Jane Doe", "Sales");
manager.displayInfo(); // "Name: John Doe, Department: Sales"

class Product {
    constructor(name, price, quantity) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
    }
  }
  
  class Order {
    constructor(id) {
      this.id = id;
      this.products = [];
    }
  
    addProduct(product) {
      this.products.push(product);
    }
  
    getTotalPrice() {
      let totalPrice = 0;
  
      for (const product of this.products) {
        totalPrice += product.price * product.quantity;
      }
  
      return totalPrice;
    }
  }
  
  const order = new Order(12345);
  
  const product1 = new Product("Phone", 500, 2);
  order.addProduct(product1);
  
  const product2 = new Product("Headphones", 100, 1);
  order.addProduct(product2);
  
  console.log(order.getTotalPrice()); 
  
  