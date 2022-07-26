import { render } from '@testing-library/react'

import BubbleSort from './BubbleSort'

test('should render component', () => {
    const container = render(<BubbleSort />)

    expect(container).toMatchSnapshot()
})