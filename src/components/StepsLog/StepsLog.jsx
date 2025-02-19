const StepsLog = ({ title, children, onClose }) => (
	<div className='offcanvas offcanvas-end show' tabIndex='-1' id='offcanvas' aria-labelledby='offcanvasLabel' >
		<div className='offcanvas-header bg-primary text-white'>
			<h5 className='offcanvas-title' id='offcanvasLabel'>{title}</h5>
			<button type='button' className='btn-close bg-light' data-bs-dismiss='offcanvas' aria-label='Close' onClick={onClose}></button>
		</div>
		<div className='offcanvas-body'>
			{children}
		</div>
	</div>
)

export default StepsLog