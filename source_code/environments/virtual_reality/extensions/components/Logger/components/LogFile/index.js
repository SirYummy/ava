import DefaultProperties from './properties'

class LogFile {

    constructor(props = DefaultProperties) {
        this.props.name = props.name
        this.props.relativePath = props.relativePath
    }

    getProps() { return this.props }
}

LogFile.prototype.defaultProps = DefaultProperties

export default LogFile