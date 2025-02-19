import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

const SliderWrapper = ({ max, value, disabled, onChange }) => (
	<Slider
		min={0}
		max={max}
		value={value}
		disabled={disabled}
		onChange={onChange}
		railStyle={{
			height: 2
		}}
		handleStyle={{
			height: 28,
			width: 28,
			marginLeft: -14,
			marginTop: -14,
			backgroundColor: 'green',
			border: 0,
			opacity: 1
		}}
		trackStyle={{
			background: 'green'
		}}
	/>
)

export default SliderWrapper