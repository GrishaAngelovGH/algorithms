import { render } from '@testing-library/react'

import FloodFill from './FloodFill'

test('should render component', () => {
    const container = render(<FloodFill />)

    expect(container).toMatchSnapshot()
})