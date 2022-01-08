import { useState } from 'react';
import './expenseForm.css';

export default function ExpenseForm(props) {
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');

	const amountChange = e => {
		setEnteredAmount(e.target.value);
	};
	const dateChange = e => {
		setEnteredDate(e.target.value);
	};
	const titleChange = e => {
		setEnteredTitle(e.target.value);
	};

	const handleFormSubmit = async e => {
		e.preventDefault();
		const expenseData = {
			title: enteredTitle,
			amount: +enteredAmount,
			date: new Date(enteredDate),
		};
		await props.onSaveExpenseData(expenseData);
		setEnteredTitle('');
		setEnteredAmount('');
		setEnteredDate('');
	};

	const renderHideForm = () => {
		props.onCancel();
	};

	return (
		<form onSubmit={handleFormSubmit}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input type='text' value={enteredTitle} onChange={titleChange} />
				</div>
				<div className='new-expense__control'>
					<label htmlFor='amount'>Amount</label>
					<input
						type='number'
						min='0.01'
						step='0.01'
						name='amount'
						onChange={amountChange}
						value={enteredAmount}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input
						type='date'
						min='2019-01-01'
						max='2022-12-31'
						onChange={dateChange}
						value={enteredDate}
					/>
				</div>
			</div>
			<div className='new-expense__actions'>
				<button onClick={renderHideForm} type='button'>
					Cancel
				</button>
				<button type='submit'>Add Expense</button>
			</div>
		</form>
	);
}
