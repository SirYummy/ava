/*
 * Ava
 * @creator: SirYummy
 * @repo: https://github.com/SirYummy/ava
 *
 * Base Class
 *
 */
const readline = require('readline')
const React = require('react')

module.exports = class Ava extends React.Component {

	constructor(props) {
		super(props)
		this.greet = this.greet.bind(this)
		this.greet()
	}

	get confused() {
		return '\x1b[36m' + `I'm sorry, but I don't understand your request yet.
Please be patient while my creator teaches me more about the world.
Thank you!` + '\x1b[0m' 
	}

	greet() {
		const greeting = '\x1b[36m' + 'Hello, my name is Ava.  How can I help you?' + '\x1b[0m'
		this.typeOut(greeting)
	}

	typeOut(phrase) {
		let phraseIndex = 0
		const typeInterval = 
			setInterval(() => {
				let typeMe = phrase[phraseIndex]
				phraseIndex++
				if(phraseIndex > phrase.length) {
					clearInterval(typeInterval)
					process.stdout.write('\n')
					this.acceptUserInput()
				} else {
					process.stdout.write(`${typeMe}`)
				}
			}, 50)
	}

	acceptUserInput() {
		const rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout
		})

		rl.on('line', (input) => {
			this.provideResponse(input)
		})
			
	}

	provideResponse(userInput) {
		this.typeOut(this.confused)
	}

	render() {
		return (null)
	}

}
