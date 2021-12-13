import { useState } from 'react'

import ToggleButton from 'react-bootstrap/ToggleButton'

import Legend from './Legend'
import InputRange from './InputRange'
import WaveBackground from '../../WaveBackground'

const BubbleSort = () => {
    const [step, setStep] = useState(0)
    const [checked, setChecked] = useState(false)

    const array = [5, 1, 4, 2, 3]
    const steps = 6

    /*
        Note: 
        Operations 'swap' and 'appendToElements' are always one after another.
        When we swap elements after the swap we push swapped values to their corresponding array i.e. swappedElements.
        After that we perform 'appendToElements' and push new subarray with elements.
        In that way we have the following map:

        [[v1, v2, v3]] i.e. 'elements' <---> [[v1, v3]] i.e. 'swappedElements'
        [[v1, v2, v3],[v4, v5, v6]] i.e. 'elements' <---> [[v1, v3], [v5, v6]] i.e. 'swappedElements'

        That is used to color elements in yellow, if given value 'v' is in corresponding subarray 'swappedElements'
        const isSwapped = v === swappedElements[i - 1][0] || v === swappedElements[i - 1][1]
    */

    // used only for visualization purpose
    let elements = [[...array]]
    let swappedElements = []

    const appendToElements = (elements, arr) => [...elements, [...arr]]

    const generateKey = data => `${data}_${new Date().getTime()}`

    const swap = (arr, i, j) => {
        [arr[i], arr[j]] = [arr[j], arr[i]]

        // add values of swapped elements, which will be colored in yellow
        swappedElements = [...swappedElements, [arr[i], arr[j]]]
    }

    const bubbleSort = () => {
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length - i - 1; j++) {
                if (array[j] > array[j + 1]) {
                    swap(array, j, j + 1)
                    elements = appendToElements(elements, array)
                }
            }
        }
    }

    const handleSlideChange = value => {
        setStep(value)
    }

    const handleToggle = ({ currentTarget }) => {
        currentTarget.checked ? setStep(steps) : setStep(0)

        setChecked(currentTarget.checked)
    }

    bubbleSort()

    return (
        <WaveBackground>
            <h1 className='text-center text-white'>Bubble Sort</h1>

            {
                Object.values(elements).map((element, i) => (
                    <div
                        key={generateKey(i)}
                        className='row g-0 justify-content-center text-center p-1 text-white fw-bold'
                    >
                        {
                            Object.values(element).map(v => {
                                // skip coloring of first row of elements
                                if (i > 0) {
                                    const isSwapped = v === swappedElements[i - 1][0] || v === swappedElements[i - 1][1]

                                    // color all elements in yellow if toggle button is clicked
                                    // otherwise color elements in yellow on each step
                                    const bgClass = !checked ?
                                        (isSwapped && step === i ? 'bg-warning' : 'bg-success') :
                                        (isSwapped ? 'bg-warning' : 'bg-success')

                                    return (
                                        <div key={generateKey(v)} className={`col-md-1 mx-1 ${bgClass} rounded`}>
                                            {v}
                                        </div>
                                    )
                                }

                                return (
                                    <div key={generateKey(v)} className='col-md-1 mx-1 bg-success rounded'>
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
                    Object.values(elements)[elements.length - 1].map(v => (
                        <div key={generateKey(v)} className='col-md-1 mx-1 bg-success rounded'>
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