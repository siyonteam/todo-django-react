import React from "react";
import "./Header.css";
import { SearchOutlined } from "@material-ui/icons";
function Header() {
	return (
		<div className='Header'>
			<div className='Header__right'>
				<p>ورود</p>
			</div>
			<div className='Header__left'>
				{/* logo */}

				<div className='Header__left--searchBox'>
					<SearchOutlined />
					<input type='text' placeholder='Search' />
				</div>
			</div>
		</div>
	);
}

export default Header;
