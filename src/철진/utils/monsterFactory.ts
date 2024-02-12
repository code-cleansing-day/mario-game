import { BaseMonster, MonsterData } from '../Characters.ts'
import { MONSTER_DATA } from '../constants/monster.ts'

export const monsterFactory = (types: MonsterData['name'][]) => {
    return types.map((type) => new BaseMonster(MONSTER_DATA[type]))
}
