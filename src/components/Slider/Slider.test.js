import { render } from '@testing-library/react'

import Slider from './Slider'

test('should render component', () => {
    const container = render(<Slider />)

    expect(container).toMatchSnapshot()
})