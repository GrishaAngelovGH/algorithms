import { useState, useEffect, useCallback, useMemo, useRef } from 'react'

import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

import AlgorithmDescription from 'components/AlgorithmDescription'
import WaveBackground from 'components/WaveBackground'

const FloodFill = () => {
	const grid = useMemo(() => [
		['#', '#', '#', '#', '#', '#', '#', '#', '#'],
		['#', ' ', ' ', ' ', '#', ' ', ' ', ' ', '#'],
		['#', ' ', ' ', ' ', '#', ' ', ' ', ' ', '#'],
		['#', ' ', ' ', '#', ' ', ' ', ' ', ' ', '#'],
		['#', '#', '#', ' ', ' ', ' ', '#', '#', '#'],
		['#', ' ', ' ', ' ', ' ', '#', ' ', ' ', '#'],
		['#', ' ', ' ', ' ', '#', ' ', ' ', ' ', '#'],
		['#', ' ', ' ', ' ', '#', ' ', ' ', ' ', '#'],
		['#', '#', '#', '#', '#', '#', '#', '#', '#'],
	], [])

	const generateEmptyGrid = () => new Array(9).fill(0).map(() => new Array(9).fill(false))

	const [currentIndex, setCurrentIndex] = useState(0)
	const [visitedIndexes, setVisitedIndexes] = useState([])
	const [visitedGrid, setVisitedGrid] = useState(generateEmptyGrid())

	const visitedPositions = useRef(generateEmptyGrid())

	const nextStep = useCallback((i, j) => {
		if (visitedPositions.current[i][j] || grid[i][j] === '#') return

		visitedPositions.current[i][j] = true

		setVisitedIndexes(indexes => [...indexes, [i, j]])

		nextStep(i, j)
		nextStep(i + 1, j)
		nextStep(i - 1, j)
		nextStep(i, j + 1)
		nextStep(i, j - 1)
	}, [grid])

	const handleStep = () => {
		const coords = visitedIndexes[currentIndex]

		if (coords) {
			const newVisitedGrid = [...visitedGrid]

			newVisitedGrid[coords[0]][coords[1]] = true

			setVisitedGrid(newVisitedGrid)

			setCurrentIndex(currentIndex + 1)
		}
	}

	const handleReset = () => {
		setCurrentIndex(0)

		setVisitedIndexes([])

		setVisitedGrid(generateEmptyGrid())

		visitedPositions.current = generateEmptyGrid()

		nextStep(4, 4)
	}

	useEffect(() => {
		nextStep(4, 4)
	}, [nextStep])

	return (
		<WaveBackground>
			<div className='row g-0 justify-content-center text-center p-3'>
				<div className='col-md-12'>
					<h3 className='text-white'>Flood Fill Algorithm</h3>

					<div className='row justify-content-center text-white'>
						<div className='col-md-6'>
							{
								grid.map((row, rowIndex) => (
									<div key={rowIndex} className='row justify-content-center'>
										{
											row.map((v, colIndex) => {
												const bgClass = visitedGrid[rowIndex][colIndex] ? 'bg-light' : v === '#' ? 'bg-primary' : ''

												return (
													<div key={colIndex} className={`col-md-1 border ${bgClass}`} style={{ height: 25 }}></div>
												)
											})
										}
									</div>
								))
							}
						</div>
					</div>

					<div className='row justify-content-center m-3'>
						<div className='col-md-2'>
							<ButtonGroup size='lg' className='mb-2'>
								<Button onClick={handleStep}>Step</Button>
								<Button onClick={handleReset}>Reset</Button>
							</ButtonGroup>
						</div>
					</div>

					<div className='row justify-content-center m-3'>
						<div className='col-md-8'>
							<AlgorithmDescription>
								Flood fill is an algorithm mainly used to determine a bounded area connected
								to a given node in a multi-dimensional array.
								It is a close concept to the bucket tool in paint programs.
							</AlgorithmDescription>
						</div>
					</div>
				</div>
			</div>
		</WaveBackground>
	)
}

export default FloodFill