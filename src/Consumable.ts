import { Item } from "./Item";

export class Consumable extends Item {
  private spoiled: boolean;
  private consumed = false;

  constructor(name: string, value: number, weight: number, spoiled: boolean) {
    super(name, value, weight);
    this.spoiled = spoiled;
  }

  isConsumed() {
    return this.consumed;
  }

  setConsumed(consumed: boolean) {
    this.consumed = consumed;
  }

  isSpoiled() {
    return this.spoiled;
  }

  use(): string {
    if (!this.isSpoiled() && !this.isConsumed()) {
      return this.eat();
    }
    if (this.isConsumed()) {
      return `There is nothing left of the ${this.getName()} to consume.`;
    }
    return `${this.eat()} \n You feel sick.`;
  }

  eat(): string {
    return `You eat the ${this.getName()}.`;
  }
}
