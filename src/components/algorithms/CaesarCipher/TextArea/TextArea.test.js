import { render } from '@testing-library/react'

import TextArea from './TextArea'

test('should render component', () => {
    const container = render(<TextArea />)

    expect(container).toMatchSnapshot()
})