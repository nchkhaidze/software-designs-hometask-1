import { Weapon } from "./Weapon";

export class Bow extends Weapon {
  constructor(
    baseDamage: number,
    baseDurability: number,
    value: number,
    weight: number
  ) {
    super("Bow", baseDamage, baseDurability, value, weight);
  }

  polish() {
    const MAXIMUM_DURABILITY = 1;

    if (
      this.durabilityModifier + this.MODIFIER_CHANGE_RATE >
      MAXIMUM_DURABILITY
    ) {
      this.durabilityModifier = MAXIMUM_DURABILITY;
      return;
    }

    this.durabilityModifier += this.MODIFIER_CHANGE_RATE;
  }
}
