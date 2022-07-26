import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import Sidebar from './Sidebar'

test('should render component', () => {
    const container = render(
        <MemoryRouter initialEntries={['/linear-search']}>
            <Sidebar />
        </MemoryRouter>
    )

    expect(container).toMatchSnapshot()
})