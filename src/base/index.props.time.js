import DELTAS from './index.props.deltas'
import BASE_10 from './index.props.base10'

export default  {
    SLOW : 
        DELTAS.TYPESPEED_DELTA * 
        BASE_10.FIFTH,
    MEDIUM : 
        DELTAS.TYPESPEED_DELTA * 
        BASE_10.THIRD,
    FAST : 
        DELTAS.TYPESPEED_DELTA * 
        BASE_10.SECOND
}