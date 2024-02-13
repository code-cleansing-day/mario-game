import { StageBuilder } from './종원/model/StageBuilder'
import { Worrier } from './종원/model/Worrier'

const stage = new StageBuilder()
const 전사1 = new Worrier()
stage.buildStage()
stage.clearStage(전사1)
console.log(전사1)
console.log(stage)
