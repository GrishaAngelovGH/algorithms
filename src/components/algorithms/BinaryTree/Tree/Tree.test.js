import React from 'react'
import { render } from '@testing-library/react'

import Tree from './Tree'

jest.mock('react-d3-tree', () => {
    return () => (<div></div>)
})

test('should render component', () => {
    const ref = React.createRef()
    const container = render(<Tree ref={ref} />)

    expect(container).toMatchSnapshot()
})