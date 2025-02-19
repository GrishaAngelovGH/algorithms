import { render } from '@testing-library/react'

import TextArea from './TextArea'

test('should render TextArea component', () => {
    const view = render(<TextArea />)

    expect(view).toMatchSnapshot()
})