import React, { useState, useEffect } from "react"
import "./Main.scss"

import TodoList from "./TodoList"
import "rodal/lib/rodal.css"
function Main({ searchValue }) {
	const [searchV, setSearchV] = useState("")
	useEffect(() => {
		setSearchV(searchValue)
	}, [searchValue])
	return (
		<div className='Main'>
			<TodoList searchValue={searchV} />
		</div>
	)
}

export default Main
