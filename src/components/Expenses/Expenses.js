import './expense.css';
import ExpenseFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';
import { useState } from 'react';

export default function Expenses(props) {
	const [year, setYear] = useState('');
	const handleYearData = yearData => {
		setYear(yearData);
		console.log(yearData);
	};
	const changeFilterYear = props.items.filter(
		exp => exp.date.getFullYear().toString() === year
	);

	return (
		<div>
			<Card className='expenses'>
				<ExpenseFilter selected={year} onYearSelected={handleYearData} />
				<ExpensesChart expenses={changeFilterYear} />
				<ExpensesList items={changeFilterYear} />
			</Card>
		</div>
	);
}
