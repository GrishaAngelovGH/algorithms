import { render } from '@testing-library/react'

import FloodFill from './FloodFill'

test('should render FloodFill component', () => {
	const view = render(<FloodFill />)

	expect(view).toMatchSnapshot()
})