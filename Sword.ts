import { Weapon } from "./Weapon";

export class Sword extends Weapon {
  constructor(
    baseDamage: number,
    baseDurability: number,
    value: number,
    weight: number
  ) {
    super("Sword", baseDamage, baseDurability, value, weight);
  }

  polish() {
    const maximumDamageModifier = this.baseDamage * 0.25;

    if (
      this.damageModifier + this.MODIFIER_CHANGE_RATE >
      maximumDamageModifier
    ) {
      this.damageModifier = maximumDamageModifier;
      return;
    }

    this.damageModifier += this.MODIFIER_CHANGE_RATE;
  }
}
