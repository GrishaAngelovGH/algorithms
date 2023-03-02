import React, { useState, useEffect } from 'react'
import Tree from 'react-d3-tree'
import './Tree.css'

const TreeNode = ({ value }) => (
    <g className={'rd3t-leaf-node node__branch'}>
        <circle r='15'></circle>
        <g className='rd3t-label'>
            <text className='rd3t-label__title' textAnchor='start' x='40'>
                {value}
            </text>
            <text className='rd3t-label__attributes'></text>
        </g>
    </g>
)

const straightPathFunc = (linkDatum, orientation) => {
    const { source, target } = linkDatum

    return orientation === 'horizontal'
        ? `M${source.y},${source.x}L${target.y},${target.x}`
        : `M${source.x},${source.y}L${target.x},${target.y}`
}

const TreeWrapper = React.forwardRef(({ data, values }, ref) => {
    const [translate, setTranslate] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const dimensions = ref.current.getBoundingClientRect()

        setTranslate({
            x: dimensions.width / 2,
            y: 50
        })
    }, [ref])

    return (
        <div id='treeWrapper' className='binary-tree' ref={ref}>
            <Tree
                data={data}
                pathFunc={straightPathFunc}
                orientation='vertical'
                zoomable={false}
                collapsible={false}
                translate={translate}
                renderCustomNodeElement={({ nodeDatum: { name } }) => (<TreeNode value={name} />)}
            />
            {
                values.map(v => (
                    <span key={v} className='badge rounded-pill bg-light text-success mx-2 fs-5 shadow'>{v}</span>
                ))
            }
        </div>
    )
})

export default TreeWrapper