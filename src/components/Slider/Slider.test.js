import { render } from '@testing-library/react'

import Slider from './Slider'

test('should render Slider component', () => {
    const view = render(<Slider />)

    expect(view).toMatchSnapshot()
})