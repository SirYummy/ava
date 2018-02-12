import deltas from './deltas'
import base10 from './base10'

export default  {
    slow : 
        deltas.typeSpeedDelta * 
        base10.fifth,
    medium : 
        deltas.typeSpeedDelta * 
        base10.third,
    fast : 
        deltas.typeSpeedDelta * 
        base10.second
}