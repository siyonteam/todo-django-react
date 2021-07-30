import React from "react";
import "./Header.css";
import { SearchOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
function Header() {
	return (
		<div className='Header'>
			<div className='Header__right'>
				<ul>
					<Link to='/'>
						<li>صفحه اصلی</li>
					</Link>
					<Link to='/account'>
						<li>ورود</li>
					</Link>
				</ul>
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
