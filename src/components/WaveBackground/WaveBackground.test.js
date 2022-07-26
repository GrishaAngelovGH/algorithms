import { render } from '@testing-library/react'

import WaveBackground from './WaveBackground'

test('should render component', () => {
    const container = render(<WaveBackground />)

    expect(container).toMatchSnapshot()
})