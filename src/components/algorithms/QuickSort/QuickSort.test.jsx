import { render } from '@testing-library/react'

import QuickSort from './QuickSort'

test('should render QuickSort component', () => {
	const view = render(<QuickSort />)

	expect(view).toMatchSnapshot()
})