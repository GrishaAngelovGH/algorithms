import { Fragment } from 'react'
import './TextArea.css'

const TextArea = ({ value, disabled, onChange }) => {

    const handleTextAreaChange = ({ target: { value } }) => {
        onChange(value.toLowerCase().replace(/\n/gi, ' '))
    }

    return (
        <Fragment>
            <form className='paper' method='get' action=''>
                <textarea
                    placeholder={!disabled ? 'Enter text' : ''}
                    className='text'
                    name='text'
                    value={value}
                    disabled={disabled}
                    onChange={handleTextAreaChange}
                >
                </textarea>
            </form>
        </Fragment>
    )
}

export default TextArea