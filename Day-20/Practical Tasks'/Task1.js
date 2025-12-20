class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  discountedPrice(discount) {
    return this.price - (this.price * discount / 100);
  }
}

// Example usage
let product = new Product("Laptop", 50000);
console.log(product.discountedPrice(10)); // 10% discount
