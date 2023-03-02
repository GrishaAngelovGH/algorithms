import { render } from '@testing-library/react'

import StepsLog from './StepsLog'

test('should render component', () => {
    const container = render(
        <StepsLog title='Steps Title'>
            <div>Step 1</div>
            <div>Step 2</div>
        </StepsLog>
    )

    expect(container).toMatchSnapshot()
})