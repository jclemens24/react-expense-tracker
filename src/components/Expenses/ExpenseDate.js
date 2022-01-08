import './expenseDate.css';

export default function ExpenseDate(props) {
	const formatDate = props.date.toLocaleDateString('en-US', {
		month: 'long',
		year: 'numeric',
		day: 'numeric',
	});

	return <div className='expense-date'>{formatDate}</div>;
}
