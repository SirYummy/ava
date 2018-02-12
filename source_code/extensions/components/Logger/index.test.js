import Logger from '../Logger'

describe('`Logger`', function() {
    let LoggerInstance
    let context = () => {} //TODO: use _real_ context function
    beforeEach(() => {
        LoggerInstance = new Logger()
    })

    it('can pass a test', () => {
        expect(true).toEqual(true)
    })

    context('when it becomes active', () => {
        it('creates a new log file')
        it('logs a beginning "activated" event to the log')
    })

    context('when an output event occurs', () => {
        it('logs information about the output event to the log')
    })

    context('when an error event occurs', () => {
        it('logs information about the error event to the log')
    })

    context('when it becomes inactive', () => {
        it('writes a final "deactivated" event to the log')
        it('saves the log file')
        it('compresses the log file')
        it('frees up the memory that it occupied while it was active')
    })


})