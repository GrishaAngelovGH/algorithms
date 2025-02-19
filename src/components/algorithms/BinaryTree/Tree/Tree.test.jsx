import React from 'react'
import { render } from '@testing-library/react'

import Tree from './Tree'

jest.mock('react-d3-tree', () => {
    return () => (<div></div>)
})

test('should render Tree component', () => {
    const ref = React.createRef()
    const view = render(<Tree ref={ref} values={[1, 2, 3, 4, 5, 6]} />)

    expect(view).toMatchSnapshot()
})