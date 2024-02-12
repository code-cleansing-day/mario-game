import "./App.css";
import { Monster, 달퐁몬스터, 물컹몬스터, 찌릿몬스터 } from "./model/Monster";
import { Character, Worrier } from "./model/Worrier";

class StageBuilder {
  private static stage: number = 1;
  monsters: Monster[] = [];

  buildStage() {
    console.log(`${StageBuilder.stage} 스테이지 시작`);

    if (StageBuilder.stage === 1) {
      this.updateMonstersByTimes(new 달퐁몬스터(), 5);
      this.updateMonstersByTimes(new 물컹몬스터(), 5);
    } else if (StageBuilder.stage === 2) {
      this.updateMonstersByTimes(new 달퐁몬스터(), 3);
      this.updateMonstersByTimes(new 물컹몬스터(), 5);
      this.updateMonstersByTimes(new 찌릿몬스터(), 3);
    } else if (StageBuilder.stage === 3) {
      this.updateMonstersByTimes(new 물컹몬스터(), 10);
      this.updateMonstersByTimes(new 찌릿몬스터(), 5);
    }
  }

  clearStage(user: Character) {
    this.monsters.forEach((monster) => {
      monster.attack(user);
      user.attack(monster);

      const isClear = this.monsters.length === 0;
      if (isClear) {
        console.log(`${StageBuilder.stage} 스테이지 클리어`);
        return;
      }
    });
  }

  private updateMonstersByTimes(monster: Monster, times: number) {
    for (let i = 0; i < times; i++) {
      this.monsters.push(monster);
    }
  }
}

const stage = new StageBuilder();
const 전사1 = new Worrier();
stage.buildStage();
stage.clearStage(전사1);
console.log(전사1);
console.log(stage);

function App() {
  return <></>;
}

export default App;
