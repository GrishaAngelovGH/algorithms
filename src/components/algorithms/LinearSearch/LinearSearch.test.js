import { render } from '@testing-library/react'

import LinearSearch from './LinearSearch'

test('should render component', () => {
    const container = render(<LinearSearch />)

    expect(container).toMatchSnapshot()
})