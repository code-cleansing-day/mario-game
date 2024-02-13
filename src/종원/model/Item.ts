import { Worrier } from "./Worrier";

export interface Item {
  use(user: Worrier): void;
}

export class 빨간포션 {
  use(user: Worrier) {
    user.updateHP(20);
  }
}

export class 파란포션 {
  use(user: Worrier) {
    user.updateMP(10);
  }
}
