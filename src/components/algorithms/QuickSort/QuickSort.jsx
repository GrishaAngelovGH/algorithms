import { useState } from 'react'

import Button from 'react-bootstrap/Button'
import ToggleButton from 'react-bootstrap/ToggleButton'

import Legend from 'components/Legend'
import StepsLog from 'components/StepsLog'
import Slider from 'components/Slider'
import WaveBackground from 'components/WaveBackground'

import AlgorithmSteps from './AlgorithmSteps'

/*
		Note: 
		After swapping of two elements, swapped values are pushed to their corresponding array i.e. 'swappedElements'.
		They will be colored in yellow on each step of visualization.
		Then new subarray with all values (including swapped) is pushed to 'elements'.
		In that way we have the following map:

		[[v1, v2, v3]] i.e. 'elements' <---> [[v1, v3]] i.e. 'swappedElements'
		[[v1, v2, v3],[v4, v5, v6]] i.e. 'elements' <---> [[v1, v3], [v5, v6]] i.e. 'swappedElements'
*/

const QuickSort = () => {
	const [step, setStep] = useState(0)
	const [showAllSteps, setShowAllSteps] = useState(false)
	const [showLogs, setShowLogs] = useState(false)

	const array = [5, 1, 3, 2, 4]
	const steps = 6

	// used only for visualization purpose
	let elements = [[...array]]
	let swappedElements = []

	const appendToElements = (elements, arr) => [...elements, [...arr]]

	const swap = (arr, i, j) => {
		[arr[i], arr[j]] = [arr[j], arr[i]]

		// add values of swapped elements, which will be colored in yellow
		swappedElements = [...swappedElements, [arr[i], arr[j]]]
	}

	const partition = (arr, left, right, pivot) => {
		// Move bounds inward until they meet
		while (left <= right) {
			while (arr[left] < pivot) {
				left++
			}

			while ((right >= left) && (arr[right] > pivot)) {
				right--
			}

			// Swap out-of-place values
			if (right > left) {
				swap(arr, left, right)

				elements = appendToElements(elements, arr)
			}
		}

		// Return first position in right partition
		return left
	}

	const quickSort = (arr, i, j) => {
		const pivotIndex = Math.floor((i + j) / 2)

		swap(arr, pivotIndex, j) // Move pivot to the end

		elements = appendToElements(elements, arr)

		// k will be the first position in the right subarray
		const k = partition(arr, i, j - 1, arr[j])

		swap(arr, k, j) // Put pivot in place

		elements = appendToElements(elements, arr)

		if ((k - i) > 1) { quickSort(arr, i, k - 1) }  // Sort left partition
		if ((j - k) > 1) { quickSort(arr, k + 1, j) }  // Sort right partition
	}

	const handleSlideChange = value => {
		setStep(value)
	}

	const handleToggle = ({ target: { checked } }) => {
		setStep(checked ? steps : 0)

		setShowAllSteps(checked)
	}

	const handleLogsOpen = () => {
		setShowLogs(true)
	}

	const handleLogsClose = () => {
		setShowLogs(false)
	}

	quickSort(array, 0, array.length - 1)

	return (
		<WaveBackground>
			<h1 className='text-center text-white'>Quick Sort</h1>

			{
				elements.map((row, i) => {

					// the last array contains the final result
					if (i === elements.length - 1) {
						return (
							<div
								key={i}
								className='row g-0 justify-content-center text-center p-3 text-white fw-bold'
							>
								<h3 className='text-white'>Final Result</h3>

								{
									row.map((v, j) => (
										<div key={j} className='col-md-1 mx-1 bg-success rounded'>
											{v}
										</div>
									))
								}
							</div>
						)
					}

					return (
						<div
							key={i}
							className='row g-0 justify-content-center text-center p-1 text-white fw-bold'
						>
							{
								row.map((v, k) => {
									// skip coloring of first row of elements
									if (i > 0) {
										const isSwapped = swappedElements[i - 1].includes(v)

										// color all elements in yellow if toggle button is clicked
										// otherwise color elements in yellow on each step
										const bgClass = !showAllSteps ?
											(isSwapped && step === i ? 'bg-warning' : 'bg-success') :
											(isSwapped ? 'bg-warning' : 'bg-success')

										return (
											<div key={k} className={`col-md-1 mx-1 ${bgClass} rounded`}>
												{v}
											</div>
										)
									}

									return (
										<div key={k} className='col-md-1 mx-1 bg-success rounded'>
											{v}
										</div>
									)
								})
							}
						</div>
					)
				})
			}

			<div className='row g-0 justify-content-center align-items-center text-center'>
				<div className='col-md-2'>
					<Legend
						items={[
							{ color: '#198754', title: 'Regular element' },
							{ color: '#ffc107', title: 'Swapped element' }
						]}
					/>
				</div>
				<div className='col-md-2'>
					<ToggleButton
						className='w-100'
						id='toggle-check'
						type='checkbox'
						variant='outline-primary'
						checked={showAllSteps}
						onChange={handleToggle}
					>
						<span className='mx-1'>Show All</span>
					</ToggleButton>

					<Button
						className='w-100 mt-2'
						variant='outline-primary'
						onClick={handleLogsOpen}
					>
						Algorithm Logs
					</Button>
				</div>
			</div>

			<div className='row g-0 justify-content-center mt-3'>
				<div className='col-md-6'>
					<Slider
						max={steps}
						value={step}
						disabled={showAllSteps}
						onChange={handleSlideChange}
					/>

					<h5 className='text-center text-success fw-bold mt-2'>
						Slide to see swapped elements on each step
					</h5>

					{
						showLogs && (
							<StepsLog
								title={'Quick Sort Steps'}
								onClose={handleLogsClose}
							>
								<AlgorithmSteps />
							</StepsLog>
						)
					}
				</div>
			</div>
		</WaveBackground>
	)
}

export default QuickSort