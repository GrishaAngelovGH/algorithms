import { render } from '@testing-library/react'

import App from './App'

test('should render component', () => {
  const container = render(<App />)

  expect(container).toMatchSnapshot()
})