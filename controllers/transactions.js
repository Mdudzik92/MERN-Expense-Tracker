// Get all transactions
// GET Route: /api/v1/transactions
// Public
exports.getTransactions = (req, res, next) => {
	res.send("GET transactions");
};

// Add transaction
// POST Route: /api/v1/transactions
// Public
exports.addTransaction = (req, res, next) => {
	res.send("POST transaction");
};

// Delete transactions
// DELETE Route: /api/v1/transactions/:id
// Public
exports.deleteTransaction = (req, res, next) => {
	res.send("DELETE transaction");
};
