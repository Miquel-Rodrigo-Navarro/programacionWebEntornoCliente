"use strict"

// declaro objeto supermarket
let supermarket = {
    name: 'Mercadona',
    products: [
        { name: 'Cereales', price: '1.25€', amount: 5 },
        { name: 'Tomates', price: '0.25€', amount: 12 },
        { name: 'Plátanos', price: '0.4€', amount: 4 },
        { name: 'Entrecot de ternera', price: '10.25€', amount: 2 },
        { name: 'Jabón', price: '2.5€', amount: 15 },
        { name: 'Leche entera', price: '1€', amount: 12 },
        { name: 'Detergente', price: '5.45€', amount: 8 },
    ]
}


//EJERCICIO 1
function ShoppingCart(market) {
    this._market = market;
    this.products = [];

    //EJERCICIO 3
    /*
    si el producto esta bien escrito
    si el producto no sobrepasa el amount
    si el producto ya esta en productos el amount se suma
        si la suma de este se pasa se queda con el ultimo amount
    el amount del producto del super tiene que disminuir tambien
    devuelve el numero de productos añadidos
    */
    this.add = function (name, amount) {
        for (let product of this._market.products) {
            if (product.name !== name) {
                return 0;
            } else {
                if (amount > product.amount) {
                    console.log(`No quedan tantas existencias de ${name} en el super`);
                } else {
                    if () {
                        nnnnn
                    }
                        this.products.push(name, amount);
                    }
                }
            }
        }

    //EJERCICIO 7
    this.hasProduct = function (name) {
        for (let product of this.products) {
            if (product.name === name) {
                return true;
            }
        }

        return false;
    }

    //EJERCICIO 8
    this.getProduct = function (name) {
        for (let product of this.products) {
            if (product.name === name) {
                let producto = new CartProduct(name, product.amount);
                console.log(producto);
            } else {
                let producto = new CartProduct(name, 0);
                console.log(producto);
            }
        }
    }

    //EJERCICIO 9
    this.getPrice = function () {
        return this.products.price.reduce((precioTotal, precio) => precioTotal + precio, 0);
    }

}

//EJERCICIO 2
function CartProduct(name, amount) {
    this.name = name;
    this.amount = amount;
}
