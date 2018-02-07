/*
 * Ava - Advanced Virtual Assistant
 * @creator: Micah Delane Bolen aka SirYummy
 * @repo: https://github.com/SirYummy/ava
 *
 * Base Class
 *
 */
import ReadLine from 'readline'

import DefaultProps from './index.defaultProps'
import Time from './index.defaultProps.time'

class Ava {

	constructor() {
		this.greet = this.greet.bind(this)
		this.greet()
	}

	get confusedResponse() {
		return this.colorize(
		`I'm sorry, but I don't understand your request yet.
		Please be patient while my creator teaches me more about the world.
		Thank you!`,
		Ava.prototype.defaultProps.COLORS.AZURE.STRING
		)
	}

	get creatorInfo() {
		return this.colorize(
			`My creator is ${Ava.prototype.defaultProps.CREATOR}.`, 
			Ava.prototype.defaultProps.COLORS.AZURE.STRING
		)
	}

	colorize(text, color) {
		switch(color) {
			case Ava.prototype.defaultProps.COLORS.AZURE.STRING:
				return 
					`${Ava.prototype.defaultProps.COLORS.AZURE.PREFIX}` +
					`${text}` +
					`${Ava.prototype.defaultProps.COLORS.AZURE.SUFFIX}`
				break;
			default:
				return `${text}`
		}
	}

	greet() {
		const greeting = this.colorize(
		`Hello, my name is Ava.  How can I help you?`, 
		Ava.prototype.defaultProps.COLORS.AZURE.STRING
		)
		this.typeOut(greeting)
	}

	typeOut(phrase, phraseIntervalDelay = Ava.prototype.defaultProps.TIME.MEDIUM) {
		let phraseIndex = 0
		const typeInterval =
			setInterval(() => {
				let typeMe = phrase[phraseIndex]
				phraseIndex++
				if (phraseIndex > phrase.length) {
					clearInterval(typeInterval)
					process.stdout.write('\n')
					this.acceptUserInput()
				} else {
					process.stdout.write(`${typeMe}`)
				}
			}, phraseIntervalDelay)
	}

	acceptUserInput() {
		const rl = ReadLine.createInterface({
			input: process.stdin,
			output: process.stdout
		})

		rl.on('line', (input) => {
			this.provideResponse(input)
		})

	}

	provideResponse(userInput) {
		let response

		if (userInput.indexOf(Ava.prototype.defaultProps.CREATOR) >= 0) {
			response = this.creatorInfo
		} else {
			response = this.confusedResponse
		}
		this.typeOut(response)
	}

}

Ava.prototype.defaultProps = DefaultProps
Ava.prototype.defaultProps.TIME = Time

export default Ava