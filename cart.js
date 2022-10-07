///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((prev, curr) => prev + curr.price, 0)

console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice(cartTotal, couponValue, tax) {
    //      round                       num                       fix rounding errors  to 2 decimals
    return Math.round(((cartTotal * (1 + tax) * (1 - couponValue)) + Number.EPSILON) * 100) / 100
}

console.log(calcFinalPrice(100, .1, .06))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    email address: for order updates/account setup, string, many character types,
    first name: for billing, string, is text,
    last name: for billing, string, is text,
    phone number: for order updates, string, no need for calculations,
    address: for delivery and billing, object, so address can be grouped,
        street: string, many character types,
        city: for billing, string, is text
        state: for billing, string, is text
        zip code: for delivery and billing, string, no need for calculations, potential leading zeros
    payment information: for payment, object, so payment info can be grouped,
        card number: string, no need for calculation
        expiration date: array, two values needed,
            month: number,
            year: number,
        cvv, string, no need for calculation
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customer = {
    email: 'jarclyde@gmail.com',
    firstName: 'Jared',
    lastName: 'Clyde',
    phone: '8015924866',
    address: {
        street: '5991 S. Sultan Cir',
        city: 'Murray',
        state: 'Utah',
        zip: '84107',
    },
    payment: {
        cardNum: '1111111111111111',
        expiration: [12, 30],
        cvv: '111',
    }
}