// Specifying the application state changes in response to the store, to the context

export default (state, action) => {
	switch (action.type) {
		case "DELETE_TRANSACTION":
			return {
				...state,
				transactions: state.transactions.filter(
					(transaction) => transaction.id !== action.payload,
				),
			};
		default:
			return state;
	}
};
