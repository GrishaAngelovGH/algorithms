import { render } from '@testing-library/react'

import Layout from './Layout'

test('should render Layout component', () => {
	const sidebar = <div>sidebar</div>
	const content = <div>content</div>

	const view = render(<Layout sidebar={sidebar}>{content}</Layout>)

	expect(view).toMatchSnapshot()
})