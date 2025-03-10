import { useState } from 'react'

import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

import WaveBackground from 'components/WaveBackground'

const LinearSearch = () => {
	const [elements, setElements] = useState([])
	const [criteria, setCriteria] = useState('')
	const [currentIndex, setCurrentIndex] = useState(-1)

	const handleCriteriaInputChange = ({ target: { valueAsNumber } }) => {
		setCriteria(valueAsNumber ? valueAsNumber : '')
	}

	const handleStepButtonClick = () => {
		setCurrentIndex(
			currentIndex < elements.length - 1 ? currentIndex + 1 : 0
		)
	}

	const handleResetButtonClick = () => {
		setElements([])
		setCriteria('')
		setCurrentIndex(-1)
	}

	const handleRandomFillButtonClick = () => {
		setElements(
			new Array(10)
				.fill(0)
				.map(() => Math.floor(Math.random() * 100))
				.filter(v => v > 0)
		)
	}

	return (
		<WaveBackground>
			<div className='row g-0 justify-content-center text-center p-3'>
				<div className='col-md-12'>
					<h3 className='text-white'>Linear Search Algorithm</h3>

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
									type='number'
									min={1}
									value={criteria}
									placeholder='Enter search criteria'
									onChange={handleCriteriaInputChange}
								/>
							</InputGroup>

							<div className='row justify-content-center'>
								{
									elements.map((v, i) => {
										const boxColor = currentIndex >= 0 && v === elements[currentIndex] ? 'bg-primary' : 'bg-success'

										return (
											<div key={i} className={`col-md-1 mx-1 text-white rounded ${boxColor}`}>
												{v}
											</div>
										)
									})
								}
							</div>

							<div className='row justify-content-center p-3'>
								<div className='col-md-2'>
									{
										elements[currentIndex] !== criteria && (
											<Button disabled={!criteria} onClick={handleStepButtonClick}>
												Step
											</Button>
										)
									}
									{
										elements[currentIndex] === criteria && (
											<Button onClick={handleResetButtonClick}>
												Reset
											</Button>
										)
									}
								</div>
								{
									currentIndex >= 0 && (
										<div className='bg-primary p-2 mt-3 rounded'>
											<h3 className='text-white'>Current element: {elements[currentIndex]}</h3>
											<h3 className='text-white'>Criteria: {criteria}</h3>
											<h3 className='text-white'>Found match: {`${elements[currentIndex] === criteria}`}</h3>
										</div>
									)
								}
							</div>
						</div>
					</div>
				</div>
			</div>
		</WaveBackground>
	)
}

export default LinearSearch