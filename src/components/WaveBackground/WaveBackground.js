import { Fragment } from 'react'
import './WaveBackground.css'

const WaveBackground = ({ children }) => (
    <Fragment>
        <div className="waveWrapper waveAnimation">
            <div className="waveWrapperInner bgTop">
                <div className="wave waveTop"></div>
            </div>
            <div className="waveWrapperInner bgMiddle">
                <div className="wave waveMiddle"></div>
            </div>
            <div className="waveWrapperInner bgBottom">
                <div className="wave waveBottom"></div>
            </div>
        </div>

        <div className='wave-content'>
            {children}
        </div>
    </Fragment>
)

export default WaveBackground