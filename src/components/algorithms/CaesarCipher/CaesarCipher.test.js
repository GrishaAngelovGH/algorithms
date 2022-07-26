import { render } from '@testing-library/react'

import CaesarCipher from './CaesarCipher'

test('should render component', () => {
    const container = render(<CaesarCipher />)

    expect(container).toMatchSnapshot()
})