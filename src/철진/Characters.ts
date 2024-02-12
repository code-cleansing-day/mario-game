import { MONSTER_DATA } from './constants/monster.ts'

interface Character {
    attack: () => void
    receiveAttack: (damage: number) => void
    die: () => void
}

interface Monster extends Character {}

export type MonsterData = (typeof MONSTER_DATA)[keyof typeof MONSTER_DATA]

export class BaseMonster implements Monster {
    name: MonsterData['name']
    hp: MonsterData['hp']
    power: MonsterData['power']

    constructor(monsterData: MonsterData) {
        this.name = monsterData.name
        this.hp = monsterData.hp
        this.power = monsterData.power
    }

    attack() {}

    receiveAttack(damage: number) {
        this.hp -= damage
    }

    die() {}
}

interface Warrior extends Character {
    specialAttack: () => void
    receiveItem: () => void
    recover: (type: 'HP' | 'MP', amount: number) => void
}

export class BaseWarrior implements Warrior {
    hp: number
    mp: number

    constructor({ hp, mp }: { hp: number; mp: number }) {
        this.hp = hp
        this.mp = mp
    }

    attack() {}

    receiveAttack(damage: number) {
        this.hp -= damage
    }

    die() {}

    specialAttack() {}

    receiveItem() {}

    recover(type: 'HP' | 'MP', amount: number) {
        if (type === 'HP') {
            this.hp += amount
        } else {
            this.mp += amount
        }
    }
}
