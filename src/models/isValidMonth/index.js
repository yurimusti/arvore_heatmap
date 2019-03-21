const valid = {
	state: false,
	reducers: {
		changeIsValid(state, payload) {
			return !payload
		}
	},
	effects: dispatch => ({
		// async asyncIncrement() {
		// 	await new Promise(resolve => {
		// 		setTimeout(resolve, 1000)
		// 	})
		// 	dispatch.count.increment()
		// },
	}),
}

export default valid