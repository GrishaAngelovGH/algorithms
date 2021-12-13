import { useState } from 'react'

import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

import WaveBackground from '../../WaveBackground'

const BinarySearch = () => {
    const [elements, setElements] = useState([])
    const [criteria, setCriteria] = useState('')
    const [label, setLabel] = useState({ title: '', success: false })


    const handleCriteriaInputChange = ({ target: { value } }) => {
        setCriteria(parseInt(value))
    }

    const handleStepButtonClick = () => {
        const values = [...elements]

        if (!values.length || (values.length === 1 && values[0] !== parseInt(criteria))) {
            setLabel({ title: 'Element is not found!', success: false })
        }

        const index = Math.floor(values.length / 2)

        if (values[index] === parseInt(criteria)) {
            setLabel({ title: 'Element is found!', success: true })
        }

        const newElements = parseInt(criteria) < values[index] ? values.slice(0, index) : values.slice(index)

        setElements(newElements.sort((a, b) => a - b))
    }

    const handleRandomFillButtonClick = () => {
        const newElements = new Array(10).fill(0).map(() => Math.floor(Math.random() * 100)).filter(v => v > 0)

        setElements(newElements.sort((a, b) => a - b))
        setLabel({ title: '', success: false })
    }

    const handleResetButtonClick = () => {
        setElements([])
        setCriteria('')
        setLabel({ title: '', success: false })
    }

    return (
        <WaveBackground>
            <div className='row g-0 justify-content-center text-center p-3'>
                <div className='col-md-12'>
                    <h3 className='text-white'>Binary Search Algorithm</h3>

                    <div className='row justify-content-center'>
                        <div className='col-md-6'>
                            <InputGroup className='mb-3'>
                                <FormControl
                                    value={elements}
                                    disabled={true}
                                />
                                <Button onClick={handleRandomFillButtonClick}>
                                    Random Fill
                                </Button>
                            </InputGroup>

                            <InputGroup className='mb-3'>
                                <FormControl
                                    type='number'
                                    min={1}
                                    placeholder='Enter search criteria, ex: 3'
                                    value={criteria}
                                    onChange={handleCriteriaInputChange}
                                />
                            </InputGroup>

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

                            {
                                elements.length > 0 && (
                                    <div className='row justify-content-center p-3'>
                                        {
                                            elements.map((v, i) => (
                                                <div key={i} className='col-md-1 mx-1 bg-success text-white rounded'>{v}</div>
                                            ))
                                        }
                                    </div>
                                )
                            }

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