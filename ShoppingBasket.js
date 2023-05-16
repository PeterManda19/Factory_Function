/**
 * Creates a shopping basket object with methods to buy items and check quantities.
 *
 * @returns {Object} The shopping basket object.
 */
function ShoppingBasket(){

    // this is scoped inside the ShoppingBasket function
    const fruitsBought = {};

    /**
     * Buys an item and increments its count in the basket.
     *
     * @param {string} fruitName - The name of the fruit to buy.
     */
    function buy(fruitName){
        if (fruitsBought[fruitName] === undefined){
            fruitsBought[fruitName] = 0;
        }
        fruitsBought[fruitName] += 1;
    };

    /**
     * Checks the quantity of a specific fruit in the basket.
     *
     * @param {string} fruitName - The name of the fruit to check.
     * @returns {string} A message indicating the quantity of the fruit in the basket.
     */
    function check(fruitName){
        return "You have " + fruitsBought[fruitName] + " " + fruitName + "(s) in your basket.";
    }

    return {
        buy,
        check
    }
}

// Create a ShoppingBasket object
const basket = ShoppingBasket();

// Create a ShoppingListItem object
const ShoppingListItem = {
  name: "Banana",
  quantity: 3,
};

// Add the item to the basket
for (let i = 0; i < ShoppingListItem.quantity; i++) {
  basket.buy(ShoppingListItem.name);
}

// Check the quantity of the item in the basket
const quantityInBasket = basket.check(ShoppingListItem.name);

console.log(quantityInBasket); // Output: "You have 3 Banana(s) in your basket."

//Use the ShoppingListItem to buy items and calculate the total price.
// Create an array of ShoppingListItem objects
const shoppingList = [
  { name: "Apple", quantity: 3, price: 1.5 },
  { name: "Banana", quantity: 2, price: 0.5 },
  { name: "Orange", quantity: 4, price: 0.75 }
];

// Buy items and calculate the total price
let totalPrice = 0;

for (const item of shoppingList) {
  for (let i = 0; i < item.quantity; i++) {
    basket.buy(item.name);
    totalPrice += item.price;
  }
}

// Check the quantities of items in the basket
for (const item of shoppingList) {
  const quantityInBasket = basket.check(item.name);
  console.log("You have " + quantityInBasket + " " + item.name + "(s) in your basket.");
}

console.log("Total price: $" + totalPrice.toFixed(2));
