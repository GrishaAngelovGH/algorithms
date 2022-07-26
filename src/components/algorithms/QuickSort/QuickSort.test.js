import { render } from '@testing-library/react'

import QuickSort from './QuickSort'

test('should render component', () => {
    const container = render(<QuickSort />)

    expect(container).toMatchSnapshot()
})