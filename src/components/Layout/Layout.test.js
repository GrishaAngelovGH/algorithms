import { render } from '@testing-library/react'

import Layout from './Layout'

test('should render component', () => {
    const sidebar = <div>sidebar</div>
    const content = <div>content</div>

    const container = render(<Layout sidebar={sidebar}>{content}</Layout>)

    expect(container).toMatchSnapshot()
})