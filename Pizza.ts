import { Consumable } from "./Consumable";

export class Pizza extends Consumable {
  private numberOfSlices: number;
  private slicesEaten = 0;

  constructor(numberOfSlices: number, spoiled: boolean) {
    super("Pizza", 50, 1, spoiled);
    this.numberOfSlices = numberOfSlices;
  }

  eat(): string {
    if (this.slicesEaten < this.numberOfSlices) {
      this.slicesEaten++;

      if (this.slicesEaten >= this.numberOfSlices) {
        this.setConsumed(true);
      }
      return "You eat a slice of pizza.";
    } else {
      return "";
    }
  }
}
