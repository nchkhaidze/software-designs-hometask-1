import { Comparable } from "./Comparable";

let id = 0;
let numberOfItems = 0;

export abstract class Item implements Comparable<Item> {
  protected id = 0;
  protected value: number;
  protected name: string;
  protected weight: number;

  protected constructor(name: string, value: number, weight: number) {
    this.name = name;
    this.value = value;
    this.weight = weight;
    this.id = id++;
    numberOfItems++;
  }

  static get numberOfItems() {
    return numberOfItems;
  }

  static reset() {
    numberOfItems = 0;
  }

  getId(): number {
    return this.id;
  }

  getValue(): number {
    return this.value;
  }

  setValue(price: number) {
    this.value = price;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }

  getWeight(): number {
    return this.weight;
  }

  setWeight(weight: number) {
    this.weight = weight;
  }

  compareTo(other: Item): number {
    if (this.value > other.value) {
      return 1;
    }
    if (this.value < other.value) {
      return -1;
    }
    return this.name.toLowerCase().localeCompare(other.name.toLowerCase());
  }

  toString(): string {
    return `${this.name} − Value: ${this.value}, Weight: ${this.weight.toFixed(
      2
    )}`;
  }

  abstract use(): void;
}
