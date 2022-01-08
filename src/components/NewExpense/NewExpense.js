import './newExpense.css';
import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';

export default function NewExpense(props) {
	const [isAddingExpense, setIsAddingExpense] = useState(false);
	const saveExpenseDataHandler = expenseData => {
		const passedExpenseData = {
			...expenseData,
			id: Math.ceil(Math.random() * 100 + 1).toString(),
		};
		props.onAddExpense(passedExpenseData);
	};

	const toggleAddingExpenseForm = () => {
		setIsAddingExpense(prevState => {
			return !prevState;
		});
	};

	return (
		<div className='new-expense'>
			{!isAddingExpense && (
				<button onClick={toggleAddingExpenseForm}>Add New Expense</button>
			)}
			{isAddingExpense && (
				<ExpenseForm
					onSaveExpenseData={saveExpenseDataHandler}
					onCancel={toggleAddingExpenseForm}
				/>
			)}
		</div>
	);
}
