/* eslint-disable */

/**
 * Mocking client-server processing
 */
 var _products = [
  {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2, "brand": "Apple"},
  {"id": 2, "title": "iPod Touch", "price": 399.99, "inventory": 5, "brand": "Apple"},
  {"id": 3, "title": "Macbook Pro", "price": 1399.99, "inventory": 1, "brand": "Apple"},
  // {"id": 4, "title": "Soundbar", "price": 140.99, "inventory": 4, "brand": "Dell"},
  {"id": 4, "title": "Laptop", "price": 999.99, "inventory": 9, "brand": "Dell"},
  // {"id": 6, "title": "Desktop", "price": 549.99, "inventory": 3, "brand": "Dell"},
  {"id": 5, "title": "Blueray Player", "price": 19.99, "inventory": 5, "brand": "Sony"},
  {"id": 6, "title": "Walkman", "price": 0.01, "inventory": 3, "brand": "Sony"},
  // {"id": 9, "title": "5.1 Surround Sound", "price": 199.99, "inventory": 5, "brand": "Sony"}
];

 const TIMEOUT = 1000; // 1 second wait for test purposes
 const MAX_CHECKOUT = 2; // max different items
 
 export const api = {
   getProducts() {
     return new Promise( resolve => {
       setTimeout(() => resolve(_products), TIMEOUT);
     });
   },
 
   buyProducts(cart) {
     return new Promise( (resolve, reject) => {
         setTimeout(() => {
           Object.keys(cart.quantityById).length <= MAX_CHECKOUT ?
             resolve(cart):
             reject(`You can buy ${MAX_CHECKOUT} items at maximum in a checkout`);
         }, TIMEOUT);
     });
   }
 };
 