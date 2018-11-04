import api from './api'
import Op from './op'

declare enum Side {
  LEFT = "left",
  RIGHT = "right"
}

declare class text {
  name: string
  uri: string
  create(initial:string): string
  normalize(op:Op):Op
  apply(doc:string, op:Op):string
  transform(op:Op, otherOp:Op, side:Side):Op
  compose(op1:Op, op2:Op):Op
  transformSelection(selection:number | Array<number>, op:Op, isOwnOp:boolean):number
  selectionEq(c1:number, c2:number):boolean
  api: typeof api
}

export = text