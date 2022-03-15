import { useState, useEffect, useRef } from 'react'

import ToggleButton from 'react-bootstrap/ToggleButton'

import Legend from './Legend'
import InputRange from './InputRange'
import WaveBackground from '../../WaveBackground'

/*
    Note: 
    After swapping of two elements, swapped values are pushed to their corresponding array i.e. 'swappedElements'.
    They will be colored in yellow on each step of visualization.
    Then new subarray with all values (including swapped) is pushed to 'elements'.
    In that way we have the following map:

    [[v1, v2, v3]] i.e. 'elements' <---> [[v1, v3]] i.e. 'swappedElements'
    [[v1, v2, v3],[v4, v5, v6]] i.e. 'elements' <---> [[v1, v3], [v5, v6]] i.e. 'swappedElements'
*/

const BubbleSort = () => {
    const arrayRef = useRef([5, 1, 4, 2, 3])
    const steps = 6

    const [step, setStep] = useState(0)
    const [checked, setChecked] = useState(false)
    const [elements, setElements] = useState([[...arrayRef.current]])
    const [swappedElements, setSwappedElements] = useState([])

    const swap = (arr, i, j) => {
        [arr[i], arr[j]] = [arr[j], arr[i]]
        arrayRef.current = [...arr]

        setSwappedElements(values => [...values, [arr[i], arr[j]]])

        setElements(values => [...values, [...arr]])
    }

    const handleSlideChange = value => {
        setStep(value)
    }

    const handleToggle = ({ currentTarget }) => {
        currentTarget.checked ? setStep(steps) : setStep(0)

        setChecked(currentTarget.checked)
    }

    useEffect(() => {
        for (let i = 0; i < arrayRef.current.length; i++) {
            for (let j = 0; j < arrayRef.current.length - i - 1; j++) {
                if (arrayRef.current[j] > arrayRef.current[j + 1]) {
                    swap(arrayRef.current, j, j + 1)
                }
            }
        }
    }, [])

    return (
        <WaveBackground>
            <h1 className='text-center text-white'>Bubble Sort</h1>

            {
                Object.values(elements).map((element, i) => (
                    <div
                        key={i}
                        className='row g-0 justify-content-center text-center p-1 text-white fw-bold'
                    >
                        {
                            Object.values(element).map((v, j) => {
                                // skip coloring of first row of elements
                                if (i > 0) {
                                    const isSwapped = swappedElements[i - 1].includes(v)

                                    // color all elements in yellow if toggle button is clicked
                                    // otherwise color elements in yellow on each step
                                    const bgClass = checked ?
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
                    Object.values(elements)[elements.length - 1].map((v, i) => (
                        <div key={i} className='col-md-1 mx-1 bg-success rounded'>
                            {v}
                        </div>
                    ))
                }
            </div>

            <div className='row g-0 justify-content-center'>
                <div className='col-md-6'>
                    <Legend
                        items={[
                            { color: '#198754', title: 'Regular element' },
                            { color: '#ffc107', title: 'Swapped element' }
                        ]}
                    />
                </div>
            </div>

            <div className='row g-0 justify-content-center'>
                <div className='col-md-6'>
                    <h5 className='text-center text-white'>
                        Slide to see swapped elements on each step
                    </h5>

                    <ToggleButton
                        className='mb-4'
                        id='toggle-check'
                        type='checkbox'
                        variant='outline-success'
                        checked={checked}
                        onChange={handleToggle}
                    >
                        <span className='mx-1'>Show All</span>
                    </ToggleButton>

                    <InputRange
                        disabled={checked}
                        maxValue={steps}
                        value={step}
                        formatLabel={v => `${v} of ${steps}`}
                        onChange={handleSlideChange}
                    />
                </div>
            </div>
        </WaveBackground>
    )
}

export default BubbleSort