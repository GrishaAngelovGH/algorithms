import { useState, useEffect } from 'react'

import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

import WaveBackground from '../../WaveBackground'

const FloodFill = () => {
    const grid = [
        ['#', '#', '#', '#', '#', '#', '#', '#', '#'],
        ['#', ' ', ' ', ' ', '#', ' ', ' ', ' ', '#'],
        ['#', ' ', ' ', ' ', '#', ' ', ' ', ' ', '#'],
        ['#', ' ', ' ', '#', ' ', ' ', ' ', ' ', '#'],
        ['#', '#', '#', ' ', ' ', ' ', '#', '#', '#'],
        ['#', ' ', ' ', ' ', ' ', '#', ' ', ' ', '#'],
        ['#', ' ', ' ', ' ', '#', ' ', ' ', ' ', '#'],
        ['#', ' ', ' ', ' ', '#', ' ', ' ', ' ', '#'],
        ['#', '#', '#', '#', '#', '#', '#', '#', '#'],
    ]

    const generateEmptyGrid = () => new Array(9).fill(0).map(() => new Array(9).fill(false))

    const [currentIndex, setCurrentIndex] = useState(0)
    const [visitedIndexes, setVisitedIndexes] = useState([])
    const [visitedGrid, setVisitedGrid] = useState(generateEmptyGrid())

    let visitedPositions = generateEmptyGrid()

    const nextStep = (i, j) => {
        if (visitedPositions[i][j] || grid[i][j] === '#') return

        visitedPositions[i][j] = true

        setVisitedIndexes(prevState => [...prevState, [i, j]])

        nextStep(i, j)
        nextStep(i + 1, j)
        nextStep(i - 1, j)
        nextStep(i, j + 1)
        nextStep(i, j - 1)
    }

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

        visitedPositions = generateEmptyGrid()

        nextStep(4, 4)
    }

    useEffect(() => {
        nextStep(4, 4)
        // eslint-disable-next-line
    }, [])

    return (
        <WaveBackground>
            <div className="row g-0 justify-content-center text-center p-3">
                <div className="col-md-12">
                    <h3 className='text-white'>Flood Fill Algorithm</h3>

                    <div className="row justify-content-center text-white">
                        <div className='col-md-6'>
                            {
                                grid.map((row, rowIndex) => (
                                    <div key={rowIndex} className="row justify-content-center">
                                        {
                                            row.map((v, colIndex) => {

                                                if (visitedGrid[rowIndex][colIndex]) {
                                                    return (
                                                        <div key={colIndex} className='col-md-1 border bg-success' style={{ height: 26 }}></div>
                                                    )
                                                }

                                                if (v === '#') {
                                                    return (
                                                        <div key={colIndex} className='col-md-1 border bg-secondary' style={{ height: 26 }}></div>
                                                    )
                                                }

                                                return (
                                                    <div key={colIndex} className='col-md-1 border'>{v}</div>
                                                )
                                            })
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="row justify-content-center m-3">
                        <div className="col-md-2">
                            <ButtonGroup size='lg' className='mb-2'>
                                <Button onClick={handleStep}>Step</Button>
                                <Button onClick={handleReset}>Reset</Button>
                            </ButtonGroup>
                        </div>
                    </div>

                    <div className="row justify-content-center m-3">
                        <div className="col-md-6">
                            <h4 className='text-white'>Flood fill is an algorithm mainly used to determine a bounded area connected to a given node in a multi-dimensional array. It is a close concept to the bucket tool in paint programs.</h4>
                        </div>
                    </div>
                </div>
            </div>
        </WaveBackground>
    )
}

export default FloodFill