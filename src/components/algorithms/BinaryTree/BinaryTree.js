import { useState, useRef } from 'react'

import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

import Tree from './Tree'
import WaveBackground from '../../WaveBackground'

const BinaryTree = () => {
    const [bfsActive, setBfsActive] = useState(false)
    const [dfsActive, setDfsActive] = useState(false)
    const treeRef = useRef()

    const treeData = {
        name: 1,
        children: [
            {
                name: 2,
                children: [
                    { name: 4 },
                    { name: 5 }
                ]
            },
            {
                name: 3,
                children: [
                    { name: 6 }
                ]
            }
        ]
    }

    const handleBFSButtonClick = () => {
        setBfsActive(true)

        const nodes = []
        const queue = []
        queue.push(treeData)

        while (queue.length) {
            const node = queue[0]

            if (node.children && node.children[0]) {
                queue.push(node.children[0])
            }

            if (node.children && node.children[1]) {
                queue.push(node.children[1])
            }

            const currentNode = queue.shift()
            nodes.push(currentNode.name)
        }

        markNodesAsVisited(nodes)
    }

    const handleDFSButtonClick = () => {
        setDfsActive(true)

        const nodes = traverseInOrder(treeData)

        markNodesAsVisited(nodes)
    }

    const traverseInOrder = (node, nodes = []) => {
        if (!node) return

        traverseInOrder(node.children && node.children[0], nodes)

        nodes.push(node.name)

        traverseInOrder(node.children && node.children[1], nodes)

        return nodes
    }

    const markNodesAsVisited = (nodes) => {
        const elements = [
            ...treeRef.current.querySelectorAll('.rd3t-node > .rd3t-leaf-node'),
            ...treeRef.current.querySelectorAll('.rd3t-leaf-node > .rd3t-leaf-node')
        ]

        nodes.forEach((v, i) => {
            (function (v, i) {
                setTimeout(function () {
                    elements[v - 1].classList.add('node__branch__visited')
                }, i * 1000)
            })(v, i)
        })
    }

    const handleResetButtonClick = () => {
        const elements = [
            ...treeRef.current.querySelectorAll('.rd3t-node > .rd3t-leaf-node'),
            ...treeRef.current.querySelectorAll('.rd3t-leaf-node > .rd3t-leaf-node')
        ]

        elements.forEach(element => {
            element.classList.remove('node__branch__visited')
        })

        setBfsActive(false)
        setDfsActive(false)
    }

    return (
        <WaveBackground>
            <div className='row g-0 justify-content-center text-center p-3'>
                <div className='col-md-12'>
                    <h3 className='text-white'>Binary Search Algorithm</h3>

                    <ButtonGroup size='lg' className='mb-2'>
                        <Button onClick={handleBFSButtonClick} disabled={bfsActive || dfsActive}>Breadth First Search</Button>
                        <Button onClick={handleDFSButtonClick} disabled={bfsActive || dfsActive}>Depth First Search</Button>
                        <Button onClick={handleResetButtonClick}>Reset</Button>
                    </ButtonGroup>

                    <div className='row justify-content-center'>
                        <div className='col-md-12'>
                            <Tree data={treeData} ref={treeRef} />
                        </div>
                    </div>
                </div>
            </div>
        </WaveBackground>
    )
}

export default BinaryTree