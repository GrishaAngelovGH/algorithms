import { render } from '@testing-library/react'

import BinarySearch from './BinarySearch'

test('should render BinarySearch component', () => {
    const view = render(<BinarySearch />)

    expect(view).toMatchSnapshot()
})