import React from 'react'
import { Text } from 'react-vr'
import Messenger from '../components/Messenger'

let session = ''

class SessionMessage extends React.Component {
    render() {
       return('<div>Hello.</div>')
    }
}

let sessionMessageInstance = <SessionMessage session={this.session} />

class AvaVirtualRealityDecorator extend React.Component (/*avaInstance = new Ava()*/) => {

    avaInstance = {}
    this.session = ''
    this.messageToAva = ''

    this.greeting = `
Hello!
Welcome to The Shoppes at Beachside. 
What can I help you find today?
` //TODO: get rid of hardcoded greeting

  

    this.renderSession = () => {
        // return this.session
        // this.typeOut(this.greeting) //TODO: get rid of hardcoded typeout
        let phraseIndex = 0
        let phraseIntervalDelay = 1000
        let phrase = `
Hello!
Welcome to The Shoppes at Beachside. 
What can I help you find today?
        `
		const typeInterval =
			setInterval(() => {
				let typeMe = phrase[phraseIndex]
				phraseIndex++
				if (phraseIndex > phrase.length) {
					clearInterval(typeInterval)
					session += '\n'
				} else {
					session += typeMe
                }
                console.log(React)
			}, phraseIntervalDelay)
    }

    this.renderMessenger = () => {
        return (
            <Messenger 
            onMessageSentHandler=
            {avaInstance.prototype.acceptUserInput} 
            message={this.messageToAva} 
            />  
        )      
    }

    this.typeOut = 
    //avaInstance.prototype.typeOut = 
    (phrase, phraseIntervalDelay = this.props.time.medium) => {
		let phraseIndex = 0
		const typeInterval =
			setInterval(() => {
				let typeMe = phrase[phraseIndex]
				phraseIndex++
				if (phraseIndex > phrase.length) {
					clearInterval(typeInterval)
					this.appendToSession('\n')
				} else {
					this.appendToSession(typeMe)
				}
			}, phraseIntervalDelay)
    }
    
    avaInstance.appendToSession = (itemToBeAppended) => {
        this.session = `${this.session}${itemToBeAppended}`
    }

	this.acceptUserInput = /*avaInstance.prototype.acceptUserInput = */ (e) => {
		this.provideResponse() // avaInstance.provideResponse()
    }

    this.provideResponse = () => {
        
    }

    let phraseIndex = 0
    let phraseIntervalDelay = 1000
    let phrase = `
Hello!
Welcome to The Shoppes at Beachside. 
What can I help you find today?
    `

    const typeInterval =
			setInterval(() => {
				let typeMe = phrase[phraseIndex]
				phraseIndex++
				if (phraseIndex > phrase.length) {
					clearInterval(typeInterval)
					session += '\n'
				} else {
					session += typeMe
                }
                return render()
			}, phraseIntervalDelay)

    let render = () => {
        return (
            <Text
            style={{
            backgroundColor: '#777879',
            fontSize: .2,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}]
            }}>
                {session}
            </Text>
        )
    }

    return render()

}