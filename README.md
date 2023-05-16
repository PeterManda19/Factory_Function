# Factory_Function

**ShoppingBasket**
This is an example of using the ShoppingBasket object, created through the ShoppingBasket factory function, to manage a shopping basket and track the quantity of items.

**Usage**

* First, create a ShoppingBasket object by calling the ShoppingBasket factory function.
* Create a ShoppingListItem object with a name and quantity for the item you want to add to the basket.
* Use the buy method on the basket object to add items to the basket. Call this method as many times as needed, passing in the name of the item each time.
* Retrieve the quantity of a specific item in the basket using the check method.
Print the result to the console to see the number of items in the basket.

**Example**

```javascript

// Create a ShoppingBasket object
const basket = ShoppingBasket();

// Create a ShoppingListItem object for "Banana" with a quantity of 3
const bananaItem = ShoppingListItem("Banana", 3);

// Add "Banana" items to the basket
for (let i = 0; i < bananaItem.quantity; i++) {
  basket.buy(bananaItem.name);
}

// Retrieve the quantity of "Banana" in the basket
const bananaQuantity = basket.check(bananaItem.name);

// Print the result to the console
console.log(`Number of "${bananaItem.name}" items in the basket: ${bananaQuantity}`);
```

The console output will indicate the number of "Banana" items in the basket.

In the second example of we use the ShoppingBasket object, created through the ShoppingBasket factory function, to manage a shopping basket and calculate the total price of items.

**Usage**

* First, create a ShoppingBasket object by calling the ShoppingBasket factory function.
* Define an array called shoppingList that contains objects representing the items to be purchased. Each object should have properties such as name, quantity, and price.
* Use nested loops to iterate over each item in the shoppingList.
* Inside the loops, call the buy method on the basket object to add the item to the basket and increment its count. Also, update the totalPrice variable by adding the price of the item.
* After buying all the items, iterate over the shoppingList again to check the quantities of items in the basket using the check method.
* Print the quantities of items to the console.
* Display the total price by printing the value of the totalPrice variable, formatted with two decimal places.
