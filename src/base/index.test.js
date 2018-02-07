import Ava from './index'

describe('Ava', () => {

    describe('when an instance is created', () => {

        let avaInstance
        let avaGreetSpy

        beforeAll(() => {
            avaGreetSpy = spyOn(Ava.prototype, 'greet')
            avaInstance = new Ava()
        })

        it('is an instance of Ava', () => {
            expect(avaInstance).toBeInstanceOf(Ava)
        })

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

        beforeAll(() => {
            avaColorizeSpy = spyOn(Ava.prototype, 'colorize')
            avaInstance = new Ava()
        })
        
        it('should colorize the greeting', () => {
            expect(avaColorizeSpy).toHaveBeenCalled()
        })

    })
})