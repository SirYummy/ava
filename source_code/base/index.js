import ReadLine from 'readline'

import DefaultProperties from '../properties/default'

class Ava {

	constructor(props = DefaultProperties) {
		this.props = {...props}
		this.greet = this.greet.bind(this)
		this.greet()
	}

	get confusedResponse() {
		return this.colorize(
			this.props.phrases.confused,
			this.props.colors.maize.name
		)
	}

	get creatorInfo() {
		return this.colorize(
			`My creator is ${this.props.creator.name}.`, 
			this.props.colors.forestGreen.name
		)
	}

	colorize(textToBeColorized, colorName) {
		switch(colorName) {
			case this.props.colors.azure.name:
				return 
					`${this.props.colors.azure.prefix}` +
					`${textToBeColorized}` +
					`${this.props.colors.azure.suffix}`
				break;
			default:
				return `${textToBeColorized}`
		}
	}

	greet() {
		const colorizedGreeting = this.colorize(
			this.props.phrases.greeting,
			this.props.colors.azure.name
		)
		//this.typeOut(colorizedGreeting) TODO: re-enable this after beach demo
	}

	provideResponse(userInput) {
		let response

		if (userInput.indexOf(this.props.creator.name) >= 0) {
			response = this.creatorInfo
		} else {
			response = this.confusedResponse
		}
		//this.typeOut(response) TODO: re-enable this after beach demo
	}

}

Ava.prototype.defaultProperties = DefaultProperties

export default Ava