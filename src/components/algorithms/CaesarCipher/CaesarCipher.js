import { useState } from 'react'

import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

import WaveBackground from '../../WaveBackground'
import TextArea from './TextArea'

const rot13 = str => {
    const alphabet = [...'abcdefghijklmnopqrstuvwxyz']
    const words = str.split(' ')

    return words.map(word => {
        return [...word].map(v => {
            const index = (alphabet.indexOf(v) + 13) % alphabet.length
            return alphabet[index]
        }).join('')
    }).join(' ')
}

const CaesarCipher = () => {
    const [word, setWord] = useState('')
    const [encryptedWord, setEncryptedWord] = useState('')

    const handleTextAreaChange = value => {
        setWord(value)
        setEncryptedWord(rot13(value))
    }

    const handleSwap = () => {
        const [s1, s2] = [encryptedWord, word]

        setWord(s1)
        setEncryptedWord(s2)
    }

    const handleReset = () => {
        setWord('')
        setEncryptedWord('')
    }

    return (
        <WaveBackground>
            <div className='row g-0 justify-content-center text-center p-3'>
                <div className='col-md-12'>
                    <h3 className='text-white'>Caesar Cipher Algorithm</h3>

                    <div className='row justify-content-center align-items-center p-2'>
                        <div className='col-lg-6'>
                            <h4 className='text-white'>Raw Input</h4>
                            <TextArea value={word} onChange={handleTextAreaChange} />
                        </div>

                        <div className='row justify-content-center align-items-center'>
                            <div className='col-lg-6 p-3'>
                                <ButtonGroup size='lg' className='mb-2'>
                                    <Button onClick={handleSwap}>Swap</Button>
                                    <Button onClick={handleReset}>Reset</Button>
                                </ButtonGroup>
                            </div>
                        </div>

                        <div className='row justify-content-center align-items-center'>
                            <div className='col-lg-6'>
                                <h4 className='text-white'>Encryped Output</h4>
                                <TextArea value={encryptedWord} disabled />
                            </div>
                        </div>
                    </div>

                    <p className='text-white m-5'>
                        The action of a Caesar cipher is to replace each plaintext letter with a different one a fixed number of places down the alphabet ( 13 in this case )
                    </p>
                </div>
            </div>
        </WaveBackground>
    )
}

export default CaesarCipher