import './Chart.css';
import ChartBar from './ChartBar';

export default function Chart(props) {
	const barValues = props.bars.map(value => value.value);
	const valueMaximum = Math.max(...barValues);

	return (
		<div className='chart'>
			{props.bars.map(bar => (
				<ChartBar
					value={bar.value}
					maxValue={valueMaximum}
					label={bar.label}
					key={bar.label}
				/>
			))}
		</div>
	);
}
