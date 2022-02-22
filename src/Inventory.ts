import { Item } from "./Item";
import { ItemComparator } from "./ItemComparator";

export class Inventory {
  items: Item[] = [];
  sortComparator = new ItemValueComparator();

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
    return this.items.join(", \n");
  }
}

class ItemValueComparator implements ItemComparator {
  compare(first: Item, second: Item): number {
    return first.getValue() - second.getValue();
  }
}
