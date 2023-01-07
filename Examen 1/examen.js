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
    this.add = function (name, amount) {

        //recorremos array de productos del market
        for (const item of this._market.products) {

            //comprobamos si el producto existe en el market
            if (item.name === name && amount >= 0) {

                //comprobamos si el producto ya existe en el carrito
                let prodExist = this.products.find(prod => prod.name === name);

                //si existe
                if (prodExist != undefined) {

                    //si la cantidad del producto no sobrepasa la que hay en el market la añadimos al amount existente y la restamos al amount del market
                    if (item.amount >= amount) {
                        prodExist.amount += amount;
                        item.amount -= amount;
                        //devuelve el numero de productos añadidos
                        return amount;
                    }

                    //si la sobrepasa sumaremos al carrito el amount posible hasta que el market se quede a 0 y la restamos al amount del market
                    else {
                        let amountSobrante = item.amount;
                        prodExist.amount += amountSobrante;
                        item.amount -= amountSobrante;
                        //devuelve el numero de productos añadidos
                        return amountSobrante;
                    }
                }

                //si no existe
                else {

                    //si la cantidad del producto no sobrepasa la que hay en el market la añadimos al amount y la restamos al amount del market
                    if (item.amount >= amount) {
                        this.products.push(new CartProduct(name, amount));
                        item.amount -= amount;
                        //devuelve el numero de productos añadidos
                        return amount;
                    }

                    //si la sobrepasa sumaremos al carrito el amount posible hasta que el market se quede a 0 y la restamos al amount del market
                    else {
                        let amountSobrante = item.amount;
                        this.products.push(new CartProduct(name, amountSobrante));
                        item.amount -= amountSobrante;
                        //devuelve el numero de productos añadidos
                        return amountSobrante;
                    }
                }
            }
        }
        //si no existe devuelve 0
        return 0;
    }

    //EJERCICIO 4
    this.addAll = function (arr) {
        //creamos el array que se va a devolver con los amounts
        let arrAmount = [];

        //recorremos el array de objetos que nos han pasado
        for (let obj of arr) {

            //añadimos el resultado de this.add que es el amount que se ha añadido a this.products a nuestro array de amounts
            arrAmount.push(this.add(obj.name, obj.amount));
        }

        //ordenamos de menor a mayor el arrAmount y lo devolvemos
        return arrAmount.sort((a, b) => a - b);

    }

    //EJERCICIO 5
    this.remove = function (name, amount = 'all') {

        //recorremos el array de productos del market
        for (const item of this._market.products) {

            //comprobamos si el producto existe en el _market
            if (item.name === name && amount >= 0 || amount === 'all') {
                //comprobamos si el producto ya existe en el carrito
                let prodExist = this.products.find(prod => prod.name === name);

                //si existe
                if (prodExist != undefined) {

                    //comprobar si nos pasan 0 o null o sobrepasa la que hay en la lista de productos 
                    if (amount >= prodExist.amount || amount === 0 || amount === 'all') {
                        item.amount += prodExist.amount;
                        this.products.splice(this.products.findIndex(prod => prod.name === name), 1);
                        //devuelve todo el amount del producto qu se acaba de elminar
                        return prodExist.amount;
                    }

                    //si es 0 o null eliminamos el producto del carrito y añadimos lo que habia en el carrito al market
                    else {
                        //le restaremos al amount existente y la sumamos al amount del market
                        prodExist.amount -= amount;
                        item.amount += amount;
                        //devuelve el numero de productos devueltos al market
                        return amount;
                    }
                }
            }
        }
    }

    //EJERCICIO 6
    this.removeAll = function (arr) {
        //creamos el array que se va a devolver con los amounts
        let arrAmount = [];

        //recorremos el array de objetos que nos han pasado
        for (let obj of arr) {

            //añadimos el resultado de this.add que es el amount que se ha añadido a this.products a nuestro array de amounts
            arrAmount.push(this.remove(obj.name, obj.amount));
        }

        //ordenamos de menor a mayor el arrAmount y lo devolvemos
        return arrAmount.sort((a, b) => a - b);
    }


    //EJERCICIO 7
    this.hasProduct = function (name) {

        //recorro lista de productos
        for (let product of this.products) {

            //si el producto esta devuelve true
            if (product.name === name) {
                return true;
            }
        }

        //si no está devuelve false
        return false;
    }

    //EJERCICIO 8
    this.getProduct = function (name) {

        //recorro la lista de productos
        for (let product of this.products) {

            //si el name del producto coincide con el name que le pasamos
            if (product.name === name) {

                //creamos un abjeto con el nombre que le pasamos a la función y el amount que hay el productos
                return new CartProduct(name, product.amount);

            }

            //si no coincide devolvemos un objeto producto con el nombre que le pasamos y 0 en amount
            else {
                return new CartProduct(name, 0);

            }
        }
    }

    //EJERCICIO 9
    this.getPrice = function () {

        //variable para la suma total
        let precioTotal = 0;

        //recorremos carrito
        for (const prodCarrito of this.products) {

            //find para encontrar el producto de nuestro carro en el market
            let productoMarket = this._market.products.find(prod => prod.name === prodCarrito.name);
            precioTotal += productoMarket.price.substring(0, productoMarket.price.length - 1) * prodCarrito.amount;
        }
        //devolvemos el precioTotal
        return precioTotal;
    }

    //EJERCICIO 10
    this[Symbol.toPrimitive] = function (hint) {

        //creamos una variable para la fecha llamando a una funcion Date()
        let fechaActual = new Date().toLocaleString();

        if (hint === 'string') {
            //creamos y rellenamos la variable que devolveremos más tarde con todo lo necesario
            let factura = `ShopingCart - ${this._market.name}\nFecha: ${fechaActual}\n`;

            //devolvemos los productos
            for (let producto of this.products) {

                //encontrar el precio
                let productoMarket = this._market.products.find(prod => prod.name === producto.name);
                let precioTotal = productoMarket.price.substring(0, productoMarket.price.length - 1) * producto.amount;

                factura += `${producto.name} ${producto.amount} x ${productoMarket.price} = ${Number(precioTotal)}€\n`;
            }

            factura += `Total = ${this.getPrice()}€`;

            //devolvemos toda la facutra
            return factura;
        }

        //si no devolvemos undefined
        else {
            return undefined;
        }
    }
}



//EJERCICIO 2
function CartProduct(name, amount) {
    this.name = name;
    this.amount = amount;
}




//LAS DURAS PRUEBAS

//ejercicio 1
let cart = new ShoppingCart(supermarket);

//ejercicio 2
let cereales = new CartProduct('Tomates', 9);
let tomates = new CartProduct('Cereales', 4);
let leche = new CartProduct('Leche entera', 10);

//ejercicio 3
let añadido = cart.add('Cereales', 2);
console.log('3. lo que devuelve add = ' + añadido);
console.log('lo que tenemos en el carrito de productos')
console.log(cart.products);

//ejercicio 4
let añadidos = cart.addAll([cereales, tomates, leche]);
console.log('4. lo que devuelve addAll = ' + añadidos);
console.log('lo que tenemos en el carrito de productos')
console.log(cart.products);

//ejercicio 5
let eliminados = cart.remove('Cereales');
console.log('5. lo que devuelve remove = ' + eliminados);
console.log('lo que tenemos en el carrito de productos')
console.log(cart.products);

//ejericio 7
console.log('7. lo que devuelve hasProduct = ' + cart.hasProduct('Cereales'));

//ejercicio 8
let producto = cart.getProduct('Cereales');
console.log('8. lo que devuelve getProduct');
console.log(producto);

//ejercicio 9
console.log('9. lo que devuelve getPrice = ' + cart.getPrice());

//ejercicio 10
alert(cart);

//ejercicio 6
let muchosEliminados = cart.removeAll([cereales, tomates, leche]);
console.log('6. lo que devuelve removeAll = ' + muchosEliminados);
console.log('lo que tenemos en el carrito de productos')
console.log(cart.products);

console.log('lo que nos queda en el supermarket')
console.log(supermarket.products);