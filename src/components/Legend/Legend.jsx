import './Legend.css'

const Legend = ({ items }) => (
    <div className='item-legend text-white'>
        <div className='legend-title'>Legend</div>
        <div className='legend-scale'>
            <ul className='legend-labels'>
                {
                    items.map((v, i) => (
                        <li key={i} className='fw-bold'>
                            <span style={{ background: v.color }}></span>
                            {v.title}
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
)

export default Legend