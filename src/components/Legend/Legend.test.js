import { render } from '@testing-library/react'

import Legend from './Legend'

test('should render component', () => {
    const container = render(
        <Legend
            items={[
                { color: '#198754', title: 'Regular element' },
                { color: '#ffc107', title: 'Swapped element' }
            ]}
        />
    )

    expect(container).toMatchSnapshot()
})