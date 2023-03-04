import { render } from '@testing-library/react'

import BubbleSort from './BubbleSort'

test('should render BubbleSort component', () => {
    const view = render(<BubbleSort />)

    expect(view).toMatchSnapshot()
})