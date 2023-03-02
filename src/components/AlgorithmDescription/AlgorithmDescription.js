import Toast from 'react-bootstrap/Toast'

const AlgorithmDescription = ({ children }) => (
    <Toast className='w-100'>
        <Toast.Header closeButton={false} className='text-bg-light'>
            <h5 className='m-0'>Algorithm Description</h5>
        </Toast.Header>
        <Toast.Body>
            <h5 className='m-0'>
                {children}
            </h5>
        </Toast.Body>
    </Toast>
)

export default AlgorithmDescription