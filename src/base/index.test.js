import React from 'react'
import { configure, mount, render, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Ava from './index'

describe('Ava', () => {

    beforeAll(() => {
        configure({ adapter: new Adapter() })
    })

    describe('when created', () => {

        let avaWrapper
        let avaInstance
        let avaGreetSpy

        beforeEach(() => {
            avaGreetSpy = spyOn(Ava.prototype, 'greet')
            avaWrapper = mount(<Ava />)
            avaInstance = avaWrapper.instance()
        })

        it('is an instance of Ava', () => {
            expect(avaInstance).toBeInstanceOf(Ava)
        })

        it('greets the user', () => {
            expect(avaGreetSpy).toHaveBeenCalled()
        })
    })
})