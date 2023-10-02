import { LuLayoutDashboard } from 'react-icons/lu'
import { VscGraphLine } from 'react-icons/vsc'
import { LiaMapMarkedAltSolid } from 'react-icons/lia'
import { RxCalendar } from 'react-icons/rx'
import { IoSettingsOutline } from 'react-icons/io5'

export const sidebarLinks = [
	{
		id: 1,
		path: '/',
		icon: <LuLayoutDashboard size={24} />
	},
	{
		id: 2,
		path: '/graph',
		icon: <VscGraphLine size={24} />
	},
	{
		id: 3,
		path: '/locate',
		icon: <LiaMapMarkedAltSolid size={24} />
	},
	{
		id: 4,
		path: '/calendar',
		icon: <RxCalendar size={24} />
	},
	{
		id: 5,
		path: '/settings',
		icon: <IoSettingsOutline size={24} />
	}
]
