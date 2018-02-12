import ReadLine from 'readline'

export default (avaInstance = {}) => {

	avaInstance.prototype.typeOut = (phrase, phraseIntervalDelay = this.props.time.medium) => {
		let phraseIndex = 0
		const typeInterval =
			setInterval(() => {
				let typeMe = phrase[phraseIndex]
				phraseIndex++
				if (phraseIndex > phrase.length) {
					clearInterval(typeInterval)
					process.stdout.write('\n')
					avaInstance.acceptUserInput()
				} else {
					process.stdout.write(`${typeMe}`)
				}
			}, phraseIntervalDelay)
	}

	avaInstance.prototype.acceptUserInput = () => {
		const rl = ReadLine.createInterface({
			input: process.stdin,
			output: process.stdout
		})

		rl.on('line', (input) => {
			avaInstance.provideResponse(input)
		})

	}

}