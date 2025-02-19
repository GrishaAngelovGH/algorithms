import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Sidebar, Menu, SubMenu } from 'react-pro-sidebar'

import './Sidebar.css'

export const SubMenuWrapper = ({ subMenuTitle, open, menuItems }) => {
	const [isOpen, setIsOpen] = useState(open)

	const handleOpenChange = openValue => {
		setIsOpen(openValue)
	}

	return (
		<SubMenu label={subMenuTitle} open={isOpen} onOpenChange={handleOpenChange}>
			{
				menuItems.map((v, i) => (
					<Link key={i} className='d-block text-center p-1 text-decoration-none' to={v.link}>
						{v.title}
					</Link>
				))
			}
		</SubMenu>
	)
}

const SidebarWrapper = () => {
	const menu = [
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
	]

	return (
		<Sidebar width='230px' style={{ zIndex: 100 }} backgroundColor='dodgerblue'>
			<h3 className='text-white bg-primary text-center p-2'>Algorithms</h3>
			<Menu>
				{
					menu.map(v => (
						<SubMenuWrapper
							key={v.id}
							open={v.open}
							menuItems={v.menuItems}
							subMenuTitle={v.subMenuTitle}
						/>
					))
				}
			</Menu>
		</Sidebar>
	)
}

export default SidebarWrapper