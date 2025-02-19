import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom'

import { render } from '@testing-library/react'

import { Menu } from 'react-pro-sidebar'
import Sidebar, { SubMenuWrapper } from './Sidebar'

test('should render Sidebar component', () => {
	const view = render(
		<Router>
			<Routes>
				<Route
					path='/'
					element={(
						<Sidebar />
					)}
				/>
			</Routes>
		</Router>
	)

	expect(view).toMatchSnapshot()
})

test('should render SubMenu component', () => {
	const subMenu = {
		subMenuTitle: 'SubMenuTitle',
		open: false,
		menuItems: [
			{ link: '/', title: 'Title' }
		]
	}

	const view = render(
		<Router>
			<Routes>
				<Route
					path='/'
					element={(
						<Menu>
							<SubMenuWrapper
								open={subMenu.open}
								menuItems={subMenu.menuItems}
								subMenuTitle={subMenu.subMenuTitle}
							/>
						</Menu>
					)}
				/>
			</Routes>
		</Router>
	)

	expect(view).toMatchSnapshot()
})