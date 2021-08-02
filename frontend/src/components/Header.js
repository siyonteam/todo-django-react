import React, { useState } from "react";
import "./Header.scss";
import { SearchOutlined } from "@material-ui/icons";
import SignInUp from "./login/SignInUp";
function Header({ parentCallback }) {
	const [signInUp, setSignInUp] = useState(false);
	const [search, setSearch] = useState("");
	const handleSearch = (e) => {
		setSearch(e.target.value);
	};
	const sendParent = (e) => {
		e.preventDefault();
		parentCallback(search);
	};
	const openSign = () => {
		setSignInUp(true);
	};
	const closeSign = () => {
		setSignInUp(false);
	};

	return (
		<div className='Header'>
			<div className='Header__right'>
				<ul>
					<li>صفحه اصلی</li>

					<li onClick={() => openSign()}>ورود</li>
					<SignInUp visiblity={signInUp} close={closeSign} />
				</ul>
			</div>
			<div className='Header__left'>
				{/* logo */}

				<div className='Header__left--searchBox'>
					<SearchOutlined />
					<form action='' onSubmit={sendParent}>
						<input
							type='text'
							placeholder='Search'
							value={search}
							onChange={handleSearch}
						/>
						<button
							type='submit'
							style={{ display: "none" }}></button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Header;
