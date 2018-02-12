import LogFile from './index'

class LogFileMock {

}

describe('`LogFile`', () => {

    let logFileInstance
    let expectedProps

    const context = () => {} //TODO: use real context function

    beforeAll(() => {
        expectedProps = { 
            name : 'Expected Name', 
            relativePath : './expected/relative/path/'
        }

        logFileInstance = new LogFileMock(expectedProps)
    })

    it('can pass a test', () => {
        expect(true).toEqual(true)
    })

    context('when created', () => {

        it('is defined', () => {
            expect(logFileInstance).toBeDefined()
        })
        
        it('correctly specifies its own properties', () => {
            expect(logFileInstance.properties).toEqual(expectedProps)
        })

    })

})