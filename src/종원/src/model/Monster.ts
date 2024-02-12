import { Item, 빨간포션, 파란포션 } from "./Item";
import { Character } from "./Worrier";

export interface Monster extends Character {
  dropItem(): Item | null;
}

export class 달퐁몬스터 implements Monster {
  private atk = 10;
  private HP = 5;

  attack(character: Character) {
    character.updateHP(-this.atk);
  }

  dropItem(): Item {
    return new 파란포션();
  }

  updateHP(value: number): number {
    this.HP += value;
    return this.HP;
  }
}

export class 물컹몬스터 implements Monster {
  private atk = 20;
  private HP = 10;

  updateHP(value: number): number {
    this.HP += value;
    return this.HP;
  }

  dropItem(): Item | null {
    return null;
  }

  attack(character: Character): void {
    character.updateHP(-this.atk);
  }
}

export class 찌릿몬스터 implements Monster {
  private atk = 30;
  private HP = 15;

  updateHP(value: number): number {
    this.HP += value;
    return this.HP;
  }

  dropItem(): Item {
    return new 빨간포션();
  }

  attack(character: Character): void {
    character.updateHP(-this.atk);
  }
}
