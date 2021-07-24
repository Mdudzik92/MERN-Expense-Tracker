const Transaction = require("../models/Transaction");

// Get all transactions
// GET Route: /api/v1/transactions
// Public
exports.getTransactions = async (req, res, next) => {
	try {
		const transactions = await Transaction.find();

		return res.status(200).json({
			success: true,
			count: transactions.length,
			data: transactions,
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: "Server Error",
		});
	}
};

// Add transaction
// POST Route: /api/v1/transactions
// Public
exports.addTransaction = async (req, res, next) => {
	try {
		const { text, amount } = req.body;

		const transaction = await Transaction.create(req.body);

		return res.status(201).json({
			success: true,
			data: transaction,
		});
	} catch (err) {
		if (err.name === "ValidationError") {
			const messages = Object.values(err.errors).map((val) => val.message);

			return res.status(400).json({
				success: false,
				error: messages,
			});
		} else {
			return res.status(500).json({
				success: false,
				error: "Server Error",
			});
		}
	}
};

// Delete transactions
// DELETE Route: /api/v1/transactions/:id
// Public
exports.deleteTransaction = async (req, res, next) => {
	res.send("DELETE transaction");
};
