import { render } from '@testing-library/react'

import BinaryTree from './BinaryTree'

jest.mock('react-d3-tree', () => {
    return () => (<div></div>)
})

test('should render BinaryTree component', () => {
    const view = render(<BinaryTree />)

    expect(view).toMatchSnapshot()
})