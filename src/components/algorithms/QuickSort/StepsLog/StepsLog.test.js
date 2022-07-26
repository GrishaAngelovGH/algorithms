import { render } from '@testing-library/react'

import StepsLog from './StepsLog'

test('should render component', () => {
    const container = render(<StepsLog />)

    expect(container).toMatchSnapshot()
})