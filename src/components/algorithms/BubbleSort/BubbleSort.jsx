import { useState, useEffect } from 'react'

import Button from 'react-bootstrap/Button'
import ToggleButton from 'react-bootstrap/ToggleButton'

import Legend from '../../Legend'
import Slider from '../../Slider'
import StepsLog from '../../StepsLog'
import AlgorithmSteps from './AlgorithmSteps'
import WaveBackground from '../../WaveBackground'

/*
    Note: 
    After swapping of two elements, swapped values are pushed 
    to their corresponding array i.e. 'swappedElements'.
    They will be colored in yellow on each step of visualization.
    Then new subarray with all values (including swapped) is pushed to 'elements'.
    In that way we have the following map:

    [[v1, v2, v3]] i.e. 'elements' <---> [[v1, v3]] i.e. 'swappedElements'
    [[v1, v2, v3],[v4, v5, v6]] i.e. 'elements' <---> [[v1, v3], [v5, v6]] i.e. 'swappedElements'
*/

const BubbleSort = () => {
    let array = [5, 1, 4, 2, 3]
    const steps = 6

    const [step, setStep] = useState(0)
    const [elements, setElements] = useState([[...array]])
    const [swappedElements, setSwappedElements] = useState([])
    const [showAllSteps, setShowAllSteps] = useState(false)
    const [showLogs, setShowLogs] = useState(false)

    const swap = (arr, i, j) => {
        [arr[i], arr[j]] = [arr[j], arr[i]]
        array = [...arr]

        setSwappedElements(values => [...values, [arr[i], arr[j]]])

        setElements(values => [...values, [...arr]])
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

    useEffect(() => {
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length - i - 1; j++) {
                if (array[j] > array[j + 1]) {
                    swap(array, j, j + 1)
                }
            }
        }
    }, [])

    return (
        <WaveBackground>
            <h1 className='text-center text-white'>Bubble Sort</h1>

            {
                elements.map((row, i) => (
                    <div
                        key={i}
                        className='row g-0 justify-content-center text-center p-1 text-white fw-bold'
                    >
                        {
                            row.map((v, j) => {
                                // skip coloring of first row of elements
                                if (i > 0) {
                                    const isSwapped = swappedElements[i - 1].includes(v)

                                    // color all elements in yellow if toggle button is clicked
                                    // otherwise color elements in yellow on each step
                                    const bgClass = showAllSteps ?
                                        (isSwapped ? 'bg-warning' : 'bg-success') :
                                        (isSwapped && step === i ? 'bg-warning' : 'bg-success')

                                    return (
                                        <div key={j} className={`col-md-1 mx-1 ${bgClass} rounded`}>
                                            {v}
                                        </div>
                                    )
                                }

                                return (
                                    <div key={j} className='col-md-1 mx-1 bg-success rounded'>
                                        {v}
                                    </div>
                                )
                            })
                        }
                    </div>
                ))
            }

            <div className='row g-0 justify-content-center text-center p-3 text-white fw-bold'>
                <h3 className='text-white'>Final Result</h3>

                {
                    elements[elements.length - 1].map((v, i) => (
                        <div key={i} className='col-md-1 mx-1 bg-success rounded'>
                            {v}
                        </div>
                    ))
                }
            </div>

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
                                title={'Bubble Sort Steps'}
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

export default BubbleSort