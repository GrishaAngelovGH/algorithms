import { render } from '@testing-library/react'
import { vi } from 'vitest'

import BinaryTree from './BinaryTree'

vi.mock('react-d3-tree', () => {
	return {
		default: () => (<div></div>)
	}
})

test('should render BinaryTree component', () => {
	const view = render(<BinaryTree />)

	expect(view).toMatchSnapshot()
})