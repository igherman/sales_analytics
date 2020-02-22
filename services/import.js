const User = require('../models/user');
const Product = require('../models/product');
//const Transaction = require('../models/transaction');

exports.importUsers = (data) => {
    const user = new User({
        loginId: data.loginId,
        email: data.email,
        name: data.name,
        role: data.role,
        employeeId: data.employeeId
    });
    user.save()
        .then(() => console.log('user saved'))
        .catch(err => console.log(err));
}

exports.importProducts = (data) => {
    const product = new Product({
        productId: data.productId,
        name: data.name,
        description: data.description,
        category: data.category,
        price: data.price
    });
    product.save()
        .then(() => console.log('product saved'))
        .catch(err => console.log(err));
}