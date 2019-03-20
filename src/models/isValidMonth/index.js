const month = {
	state: false
			// listMonday: [], 
			// listTuesday: [],
			// listWednesday: [],
			// listThursday: [],
			// listFriday: [],
			// listSaturday: [],
			// listSunday: []
	,
	reducers: {
		isValid(state, payload) {
			return payload
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

export default month