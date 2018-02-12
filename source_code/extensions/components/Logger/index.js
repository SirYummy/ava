import LogFile from './components/LogFile'
import DefaultProps from './properties/default'

class Logger {

    constructor(props = DefaultProps) {
        this.props = {...props}
        this.find = this.find.bind(this)    
    }

    find(searchTerm) {
        
    }
}

Logger.prototype.defaultProps = DefaultProps

export default Logger