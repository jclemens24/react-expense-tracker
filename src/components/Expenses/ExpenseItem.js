import './expenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

export default function ExpenseItem(props) {
	return (
		<li>
			<Card className='expense-item'>
				<ExpenseDate date={props.date} />
				<div className='expense-item__description'>
					<h2>{props.title}</h2>
					<div className='expense-item__price'>{props.amount}</div>
				</div>
			</Card>
		</li>
	);
}

// class ExpenseItem extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = { title: props.title };
// 		this.handleClick = this.handleClick.bind(this);
// 	}
// 	handleClick(e) {
// 		return this.setState({ title: 'Updated' });
// 	}
// 	render() {
// 		return (
// 			<Card className='expense-item'>
// 				<ExpenseDate date={this.props.date} />
// 				<div className='expense-item__description'>
// 					<h2>{this.state.title}</h2>
// 					<div className='expense-item__price'>{this.props.amount}</div>
// 				</div>
// 				<button onClick={this.handleClick}>Change Title</button>
// 			</Card>
// 		);
// 	}
// }

// export default ExpenseItem;
