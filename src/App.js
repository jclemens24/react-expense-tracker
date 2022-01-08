import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import './App.css';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_DATA = [
	{
		id: 'e1',
		title: 'Toilet Paper',
		amount: 94.12,
		date: new Date(2020, 7, 14),
	},
	{ id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
	{
		id: 'e3',
		title: 'Car Insurance',
		amount: 294.67,
		date: new Date(2021, 2, 28),
	},
	{
		id: 'e4',
		title: 'New Desk (Wooden)',
		amount: 450,
		date: new Date(2021, 5, 12),
	},
];

const App = () => {
	const [expenses, setExpenses] = useState(DUMMY_DATA);
	const addExpenseHandler = expense => {
		setExpenses(prevExpenses => {
			return [expense, ...prevExpenses];
		});
		console.log(expense);
	};

	return (
		<div className='App'>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenses} />
		</div>
	);

	// Under the hood code for return statement above
	// Gets created automatically using JSX
	// return React.createElement(
	// 	'div',
	// 	{ class: 'App' },
	// 	React.createElement(Expenses, { expenses: expenses })
	// );
};

export default App;
