import { render } from '@testing-library/react'

import LinearSearch from './LinearSearch'

test('should render LinearSearch component', () => {
    const view = render(<LinearSearch />)

    expect(view).toMatchSnapshot()
})