import { useState, Fragment } from 'react'

import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

import WaveBackground from '../../WaveBackground'

const LinearSearch = () => {
    const [elements, setElements] = useState([])
    const [criteria, setCriteria] = useState('')
    const [currentIndex, setCurrentIndex] = useState(-1)

    const handleCriteriaInputChange = ({ target: { value } }) => {
        !value.length ? setCriteria('') : setCriteria(parseInt(value))
    }

    const handleStepButtonClick = () => {
        currentIndex > elements.length - 2 ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1)
    }

    const handleResetButtonClick = () => {
        setElements([])
        setCriteria('')
        setCurrentIndex(-1)
    }

    const handleRandomFillButtonClick = () => {
        const newElements = new Array(10).fill(0).map(() => Math.floor(Math.random() * 100)).filter(v => v > 0)

        setElements([...newElements])
        setCurrentIndex(-1)
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
                                    placeholder='Enter search criteria'
                                    value={criteria}
                                    onChange={handleCriteriaInputChange}
                                />
                            </InputGroup>

                            {
                                elements.length > 0 && (
                                    <Fragment>
                                        <div className='row justify-content-center'>
                                            {
                                                elements.map((v, i) => {
                                                    if (currentIndex >= 0 && v === elements[currentIndex]) {
                                                        return (
                                                            <div key={i} className='col-md-1 mx-1 bg-primary text-white rounded'>{v}</div>
                                                        )
                                                    }

                                                    return (
                                                        <div key={i} className='col-md-1 mx-1 bg-success text-white rounded'>{v}</div>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className='row justify-content-center p-3'>
                                            <div className='col-md-1'>
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
                                                    <div className='text-white'>
                                                        <h3>Current element: {elements[currentIndex]}</h3>
                                                        <h3>Criteria: {criteria}</h3>
                                                        <h3>Found match: {`${elements[currentIndex] === criteria}`}</h3>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </Fragment>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </WaveBackground>
    )
}

export default LinearSearch