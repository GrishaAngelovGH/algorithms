import { useState } from 'react'
import { Link } from 'react-router-dom'

import {
    ProSidebar, SidebarHeader,
    Menu, MenuItem, SubMenu
} from 'react-pro-sidebar'

import 'react-pro-sidebar/dist/css/styles.css'
import './Sidebar.css'

const SubMenuItem = ({ id, open, subMenuTitle, menuItems, onOpenChange }) => {

    const handleOpenChange = () => {
        onOpenChange(id)
    }

    return (
        <SubMenu
            title={subMenuTitle}
            open={open}
            className='bg-primary text-white'
            onOpenChange={handleOpenChange}
        >
            {
                menuItems.map(v => (
                    <MenuItem key={v.title}>
                        <Link to={v.link}>{v.title}</Link>
                    </MenuItem>
                ))
            }
        </SubMenu>
    )
}

const Sidebar = () => {
    const [menu, setMenu] = useState([
        {
            id: 1,
            subMenuTitle: 'Searching',
            open: true,
            menuItems: [
                { link: '/linear-search', title: 'Linear Search' },
                { link: '/binary-search', title: 'Binary Search' }
            ]
        },
        {
            id: 2,
            subMenuTitle: 'Sorting',
            open: false,
            menuItems: [
                { link: '/bubble-sort', title: 'Bubble Sort' },
                { link: '/quick-sort', title: 'Quick Sort' }
            ]
        },
        {
            id: 3,
            subMenuTitle: 'Binary Tree',
            open: false,
            menuItems: [
                { link: '/binary-tree', title: 'BFS and DFS Traversal' }
            ]
        },
        {
            id: 4,
            subMenuTitle: 'Cryptography',
            open: false,
            menuItems: [
                { link: '/caesar-cipher', title: 'Caesar Cipher' }
            ]
        },
        {
            id: 5,
            subMenuTitle: 'Computer Graphics',
            open: false,
            menuItems: [
                { link: '/flood-fill', title: 'Flood Fill' }
            ]
        }
    ])

    const handleOpenChange = id => {
        const newMenu = menu.map(v => {
            if (v.id === id) {
                return {
                    ...v,
                    open: true
                }
            }

            return {
                ...v,
                open: false
            }
        })

        setMenu(newMenu)
    }

    return (
        <ProSidebar>
            <SidebarHeader>
                <h3 className='text-white bg-primary text-center p-2'>Algorithms</h3>
            </SidebarHeader>

            <Menu iconShape='square'>
                {
                    menu.map(subMenu => (
                        <SubMenuItem key={subMenu.subMenuTitle} {...subMenu} onOpenChange={handleOpenChange} />
                    ))
                }
            </Menu>
        </ProSidebar>
    )
}

export default Sidebar