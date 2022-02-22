import { Item } from "./Item";

export abstract class Weapon extends Item {
  protected readonly MODIFIER_CHANGE_RATE = 0.05;
  protected baseDamage!: number;
  protected damageModifier!: number;
  protected baseDurability!: number;
  protected durabilityModifier!: number;

  protected constructor(
    name: string,
    baseDamage: number,
    baseDurability: number,
    value: number,
    weight: number
  ) {
    super(name, value, weight);
  }

  getDamage(): number {
    return this.baseDamage + this.damageModifier;
  }

  getDurability(): number {
    return this.baseDurability + this.durabilityModifier;
  }

  use(): string {
    if (this.getDurability() <= 0) {
      return `You can't use the ${this.getName()}, it is broken.`;
    }

    const usageResult = `You use the ${this.getName()}, dealing ${this.getDamage().toFixed(
      2
    )}.`;

    if (this.getDurability() - this.MODIFIER_CHANGE_RATE <= 0) {
      return `${usageResult} \n The ${this.getName()} breaks.`;
    }

    this.baseDurability -= this.MODIFIER_CHANGE_RATE;

    return usageResult;
  }

  toString(): string {
    return `${super.toString()}, Damage: ${this.getDamage()}, Durability: ${(
      this.getDurability() * 100
    ).toFixed(2)}`;
  }

  abstract polish(): void;
}
