const StepsLog = ({ onClose }) => (
    <div className="offcanvas offcanvas-end show" tabIndex="-1" id="offcanvas" aria-labelledby="offcanvasLabel" >
        <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasLabel">Quick Sort Steps</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onClick={onClose}></button>
        </div>
        <div className="offcanvas-body">
            <p className='fw-bold'>[ 5, 1, 3, 2, 4 ]</p>
            <p className='fw-bold'>Pivot: 3</p>
            <p className='fw-bold'>Swap 3 &#128257; 4</p>
            <p className='fw-bold'>[ 5, 1, 4, 2, 3 ]</p>
            <p className='fw-bold'>Partitioning for [5, 2]</p>
            <p className='fw-bold'>Partitioning set left pointer: 5</p>
            <p className='fw-bold'>Partitioning set right pointer: 2</p>
            <p className='fw-bold'>Partitioning will swap 5 &#128257; 2</p>
            <p className='fw-bold'>Partitioning set left pointer: 4</p>
            <p className='fw-bold'>Partitioning set right pointer: 1</p>
            <p className='fw-bold'>Partitioning marks 4</p>
            <p className='fw-bold'>Swap 4 &#128257; 3</p>
            <p className='fw-bold'>[ 2, 1, 3, 5, 4 ]</p>
            <p className='fw-bold'>{`Index check: 2-0 > 1 (true)`}</p>
            <p className='fw-bold'>Sort left partition [2, 1]</p>
            <hr />
            <p className='fw-bold'>[ 2, 1, 3, 5, 4 ]</p>
            <p className='fw-bold'>Pivot: 2</p>
            <p className='fw-bold'>Swap 2 &#128257; 1</p>
            <p className='fw-bold'>[ 1, 2, 3, 5, 4 ]</p>
            <p className='fw-bold'>Partitioning for [1, 1]</p>
            <p className='fw-bold'>Partitioning set left pointer: 2</p>
            <p className='fw-bold'>Partitioning set right pointer: 1</p>
            <p className='fw-bold'>Partitioning marks 2</p>
            <p className='fw-bold'>Swap 2 &#128257; 2</p>
            <p className='fw-bold'>[ 1, 2, 3, 5, 4 ]</p>
            <p className='fw-bold'>{`Index check: 4-2 > 1 (true)`}</p>
            <p className='fw-bold'>Sort right partition [5, 4]</p>
            <hr />
            <p className='fw-bold'>[ 1, 2, 3, 5, 4 ]</p>
            <p className='fw-bold'>Pivot: 5</p>
            <p className='fw-bold'>Swap 5 &#128257; 4</p>
            <p className='fw-bold'>[ 1, 2, 3, 4, 5 ]</p>
            <p className='fw-bold'>Partitioning for [4, 4]</p>
            <p className='fw-bold'>Partitioning set left pointer: 5</p>
            <p className='fw-bold'>Partitioning set right pointer: 4</p>
            <p className='fw-bold'>Partitioning marks 5</p>
            <p className='fw-bold'>Swap 5 &#128257; 5</p>
            <p className='fw-bold'>[ 1, 2, 3, 4, 5 ]</p>
            <p className='fw-bold'>Result: [ 1, 2, 3, 4, 5 ]</p>        </div>
    </div>
)

export default StepsLog