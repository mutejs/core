import Op from './op'

declare class TextAPI {
  get():string
  getLength():number
  insert(pos:number, text:string, callback:() => void):void
  remove(pos:number, text:string, callback:() => void):void
  _onOp(op:Op):void
  onInsert(pos:number, tet:string):void
  onRemove(pos:number, removedLength:number):void
}

type submitOp = (op:Op, callback:() => void) => void

declare function api(getSnapshot:() => string, submitOp:submitOp):TextAPI
declare namespace api {
  var provides:  {
    text: boolean
  }
}

export = api