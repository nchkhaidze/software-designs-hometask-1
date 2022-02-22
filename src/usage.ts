// Create the inventory
import {Inventory} from "./Inventory";
import {Sword} from "./Sword";
import {ItemWeightComparator} from "./ItemWeightComparator";
import {Pizza} from "./Pizza";

const inventory: Inventory = new Inventory();

// Create a set of items
const a = new Sword(30.4219, 0.7893, 300, 2.032);
const b = new Sword(40, 0.7893, 200, 2);
const c = new Sword(40, 1, 100, 3);
const pizza = new Pizza(12, false);

// Add the items to the inventory
inventory.addItem(a);
inventory.addItem(b);
inventory.addItem(c);
inventory.addItem(pizza);

// Display the inventory
console.log(inventory.toString());

// Sort by natural order
inventory.sort();

// Display the new inventory
console.log(inventory.toString());

// Sort by weight
inventory.sort(new ItemWeightComparator());

// Display the inventory again
console.log(inventory.toString());

// Use the sword
console.log(a.use());
console.log(a.use());

const badSword = new Sword(30.4219, 0.05, 300, 2.032);
console.log(badSword.use());
console.log(badSword.use());

const polishSword = new Sword(1, 1, 300, 2.032);
polishSword.polish();
polishSword.polish()
polishSword.polish()
polishSword.polish()
polishSword.polish()
polishSword.polish()

console.log(polishSword)
