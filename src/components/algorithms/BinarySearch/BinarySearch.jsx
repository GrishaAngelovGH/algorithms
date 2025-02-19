import { useState, useEffect } from 'react'

import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

import WaveBackground from 'components/WaveBackground'

const BinarySearch = () => {
	const [elements, setElements] = useState([])
	const [criteria, setCriteria] = useState('')
	const [middleIndex, setMiddleIndex] = useState(0)
	const [label, setLabel] = useState({ title: '', success: false })

	const handleCriteriaInputChange = ({ target: { valueAsNumber } }) => {
		setCriteria(valueAsNumber ? valueAsNumber : '')
	}

	const handleStepButtonClick = () => {
		const values = [...elements]

		if (!values.length || (values.length === 1 && values[0] !== criteria)) {
			setLabel({ title: 'Element is not found!', success: false })
		}

		if (values[middleIndex] === criteria) {
			setLabel({ title: 'Element is found!', success: true })
		}

		const newElements = criteria < values[middleIndex] ?
			values.slice(0, middleIndex) : values.slice(middleIndex)

		setElements(newElements)
	}

	const handleRandomFillButtonClick = () => {
		setElements(
			new Array(10)
				.fill(0)
				.map(() => Math.floor(Math.random() * 100))
				.filter(v => v > 0)
				.sort((a, b) => a - b)
		)

		setLabel({ title: '', success: false })
	}

	const handleResetButtonClick = () => {
		setElements([])
		setCriteria('')
		setLabel({ title: '', success: false })
	}


	useEffect(() => {
		setMiddleIndex(
			Math.floor(elements.length / 2)
		)
	}, [elements])

	return (
		<WaveBackground>
			<div className='row g-0 justify-content-center text-center p-3'>
				<div className='col-md-12'>
					<h3 className='text-white'>Binary Search Algorithm</h3>

					<div className='row justify-content-center'>
						<div className='col-md-6'>
							<InputGroup className='mb-3'>
								<FormControl value={elements} disabled={true} />

								<Button onClick={handleRandomFillButtonClick}>
									Random Fill
								</Button>
							</InputGroup>

							<InputGroup className='mb-3'>
								<FormControl
									min={1}
									type={'number'}
									value={criteria}
									placeholder={'Enter search criteria'}
									onChange={handleCriteriaInputChange}
								/>
							</InputGroup>

							<div className='row justify-content-center'>
								{
									elements.map((v, i) => {
										const middleElementClass = i === middleIndex ? 'border border-2 border-white' : ''
										const elementClass = `col-md-1 mx-1 bg-success text-white rounded ${middleElementClass}`

										return (
											<div key={i} className={elementClass}>{v}</div>
										)
									})
								}
							</div>

							<div className='row justify-content-center p-3'>
								<div className='col-md-2'>
									{
										!label.title.length && (
											<Button onClick={handleStepButtonClick} disabled={criteria === ''}>
												Step
											</Button>
										)
									}

									{
										label.title.length > 0 && (
											<Button onClick={handleResetButtonClick}>
												Reset
											</Button>
										)
									}
								</div>
							</div>

							{
								label.title.length > 0 && (
									<Alert variant={label.success ? 'success' : 'danger'}>
										<Alert.Heading>{label.title}</Alert.Heading>
									</Alert>
								)
							}
						</div>
					</div>
				</div>
			</div>
		</WaveBackground>
	)
}

export default BinarySearch