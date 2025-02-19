const Layout = ({ sidebar, children }) => (
    <div className='row g-0 p-3'>
        <div className='col-md-3 col-lg-2'>
            {sidebar}
        </div>
        <div className='col-md-9 col-lg-10'>
            {children}
        </div>
    </div>
)

export default Layout