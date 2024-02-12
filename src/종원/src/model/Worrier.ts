import { Item, 빨간포션, 파란포션 } from "./Item";
import { Monster } from "./Monster";

export interface Character {
  attack(character: Character): void;
  updateHP(value: number): number;
}

export class Worrier implements Character {
  private inventory: Item[] = [];

  constructor(private HP: number = 100, private MP: number = 100) {}

  attack(character: Monster): void {
    const usageMP = 5;
    if (this.MP < usageMP) {
      throw new Error(`공격할 때 사용할 MP가 부족합니다.\n현재 MP: ${this.MP}`);
    }
    this.MP -= usageMP;
    const currentHP = character.updateHP(-usageMP);
    if (currentHP <= 0) {
      const droppedItem = character.dropItem();
      if (droppedItem) this.inventory.push(droppedItem);
    }
  }

  usePotion(type: "red" | "blue") {
    this.inventory.forEach((item) => {
      if (type === "red" && item instanceof 빨간포션) item.use(this);
      if (type === "blue" && item instanceof 파란포션) item.use(this);
    });
  }

  updateHP(value: number) {
    this.HP += value;
    return this.HP;
  }

  updateMP(value: number) {
    this.MP += value;
  }
}
