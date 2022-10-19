import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'

import { render } from '@testing-library/react'

import { ProSidebarProvider, Menu } from 'react-pro-sidebar'
import Sidebar, { SubMenuWrapper } from './Sidebar'

test('should render component', () => {
    const container = render(
        <Router>
            <Routes>
                <Route
                    path='/'
                    element={(
                        <ProSidebarProvider>
                            <Sidebar />
                        </ProSidebarProvider>
                    )}
                />
            </Routes>
        </Router>
    )

    expect(container).toMatchSnapshot()
})

test('should render component', () => {
    const subMenu = {
        subMenuTitle: 'SubMenuTitle',
        open: false,
        menuItems: [
            { link: '/', title: 'Title' }
        ]
    }

    const container = render(
        <Router>
            <Routes>
                <Route
                    path='/'
                    element={(
                        <ProSidebarProvider>
                            <Menu>
                                <SubMenuWrapper
                                    open={subMenu.open}
                                    menuItems={subMenu.menuItems}
                                    subMenuTitle={subMenu.subMenuTitle}
                                />
                            </Menu>
                        </ProSidebarProvider>
                    )}
                />
            </Routes>
        </Router>
    )

    expect(container).toMatchSnapshot()
})