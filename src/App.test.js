import { render } from '@testing-library/react'
import { ProSidebarProvider } from 'react-pro-sidebar'

import App from './App'

test('should render component', () => {
  const container = render(
    <ProSidebarProvider>
      <App />
    </ProSidebarProvider>
  )

  expect(container).toMatchSnapshot()
})