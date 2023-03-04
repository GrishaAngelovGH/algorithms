import { render } from '@testing-library/react'

import CaesarCipher from './CaesarCipher'

test('should render CaesarCipher component', () => {
    const view = render(<CaesarCipher />)

    expect(view).toMatchSnapshot()
})