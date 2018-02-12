import Logger from '../extensions/components/Logger'
import Ava from './index'
import ExpectedProperties from './properties'

class LoggerMock {
    find(mockSearchTerm) {

    }
}

describe('Ava', () => {

    let context = () => {} // TODO: Use real context function

    describe('when an instance is created', () => {

        let avaInstance = null
        let avaGreetSpy = null

        beforeAll(() => {
            avaGreetSpy = spyOn(Ava.prototype, 'greet')
            avaInstance = new Ava()
        })

        afterAll(() => {
            avaInstance = null
            avaGreetSpy = null
        })

        it('is an instance of Ava', () => {
            expect(avaInstance).toBeInstanceOf(Ava)
        })

        it('took less than 100 milliseconds to create')

        it('has a greet property bound to the instance', () => {
            expect(avaInstance.hasOwnProperty('greet')).toEqual(true)
        })

        it('greets the user', () => {
            expect(avaGreetSpy).toHaveBeenCalled()
        })
    })

    describe('when it greets the user', () => {

        let avaInstance
        let avaColorizeSpy
        let expectedGreeting

        beforeAll(() => {
            avaColorizeSpy = spyOn(Ava.prototype, 'colorize')
            avaInstance = new Ava()
            expectedGreeting = ExpectedProperties.phrases.greeting
        })
        
        it('should colorize the greeting', () => {
            expect(avaColorizeSpy).toHaveBeenCalled()
        })

        it('should show the correct greeting in less than 100 milliseconds', () => {
            const actualGreeting = Logger.find(expectedGreeting)
            expect(actualGreeting).toEqual(expectedGreeting)
        })

    })

    describe('after it greets the user', () => {
        it('should allow the user to enter text')
    })

    describe('after the user enters text and presses `Enter`', () => {
        
        it('should remember what text the user just entered')
        
        context('if Ava recognizes the text', () => {
            it('should respond with a message that indicates ')
        })
    })

    context('the user has entered text and pressed `Enter` more than once')
  
})