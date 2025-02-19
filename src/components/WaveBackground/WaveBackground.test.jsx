import { render } from '@testing-library/react'

import WaveBackground from './WaveBackground'

test('should render WaveBackground component', () => {
    const view = render(<WaveBackground />)

    expect(view).toMatchSnapshot()
})