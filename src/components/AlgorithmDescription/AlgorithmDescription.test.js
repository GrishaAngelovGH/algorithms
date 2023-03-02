import { render } from '@testing-library/react'

import AlgorithmDescription from './AlgorithmDescription'

test('should render component', () => {
    const container = render(
        <AlgorithmDescription>
            Description of algorithm
        </AlgorithmDescription>
    )

    expect(container).toMatchSnapshot()
})