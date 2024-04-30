import React,{useContext} from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'
// import { AdminContext } from '../../Context/AdminContext'

export default function Layout() {
	// const {name} = useContext(AdminContext)
	return (
		<div className="bg-white h-screen w-screen overflow-hidden flex flex-row">
			<Sidebar />
			<div className="flex flex-col flex-1">
				<Header name={""}/>
				<div className="flex-1 p-4 min-h-0 overflow-auto">
					<Outlet />
				</div>
			</div>
		</div>
	)
}
