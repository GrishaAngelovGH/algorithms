import { render } from '@testing-library/react'

import AlgorithmDescription from './AlgorithmDescription'

test('should render AlgorithmDescription component', () => {
    const view = render(
        <AlgorithmDescription>
            Description of algorithm
        </AlgorithmDescription>
    )

    expect(view).toMatchSnapshot()
})