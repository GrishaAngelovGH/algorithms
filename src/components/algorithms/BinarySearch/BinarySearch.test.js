import { render } from '@testing-library/react'

import BinarySearch from './BinarySearch'

test('should render component', () => {
    const container = render(<BinarySearch />)

    expect(container).toMatchSnapshot()
})