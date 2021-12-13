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
                    className='text'
                    name='text'
                    value={value}
                    disabled={disabled}
                    placeholder={!disabled ? 'Enter text' : ''}
                    onChange={handleTextAreaChange}
                >
                </textarea>
            </form>
        </Fragment>
    )
}

export default TextArea