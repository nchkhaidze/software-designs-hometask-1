import { Item } from "./Item";
import { ItemComparator } from "./ItemComparator";
import { ItemWeightComparator } from "./ItemWeightComparator";

export class Inventory {
  items: Item[] = [];
  sortComparator = new ItemWeightComparator();

  addItem(item: Item) {
    this.items.push(item);
  }

  sort(comparator?: ItemComparator) {
    if (!comparator) {
      this.items = this.items.sort(this.sortComparator.compare);
      return;
    }
    this.items = this.items.sort(comparator.compare);
  }

  toString(): string {
    return this.items.join(", ");
  }
}
