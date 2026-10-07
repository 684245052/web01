import { ProductDAO } from './Product.ts';
import { ProductDAO } from './ProductDAO.ts';

const ProductDAO = new ProductDAO();

console.log(ProductDAO.insert("John", "john003@gmail.com"));
console.log(ProductDAO.insert("Jane", "jane003@gmail.com"));

const users = ProductDAO.findAll();

users.forEach(user => {
    console.log(user.getInfo());
});
