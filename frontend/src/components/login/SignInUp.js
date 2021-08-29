import React, { useState } from 'react'
import Rodal from 'rodal'
import { login } from '../../services/auth.service'
import { Button } from 'react-bootstrap'
import './SignInUp.scss'
import 'rodal/lib/rodal.css'
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
function SignInUp({ visiblity, close }) {
	const [chooser, setChooser] = useState(true) // if it is true it will show login form but if it is false it will show register form
	const [showPwdIcon, setShowPwdIcon] = useState(true)

	const [user, setUser] = useState({
		username: null,
		password: null,
	})
	const handleUserLogin = (e) => {
		setUser({ username: e.target.value })
	}
	const handlePassLogin = (e) => {
		setUser({ password: e.target.value })
	}
	const handleLoginSubmit = (e) => {
		e.preventDefault()
		console.log(login('Siamak', 'Alipour'))
		setUser({
			username: null,
			password: null,
		})
	}
	const pwdIconChooser = () => {
		setShowPwdIcon((prevState) => !prevState)
	}
	const loginRegisterChooser = () => {
		setChooser((prevState) => !prevState)
	}
	return (
		<Rodal
			visible={visiblity}
			onClose={close}
			className='rodalModal'
			animation='fade'>
			<div className='SignInUp'>
				{chooser ? (
					<div className='SignInUp__loginRegister'>
						<p>ورود به حساب کاربری</p>
						<form className='SignInUp__loginRegister--form'>
							<input
								type='text'
								placeholder='نام کاربری'
								value={user.username}
								onChange={handleUserLogin}
							/>
							<div className='password-wrap'>
								<input
									type={showPwdIcon ? 'password' : 'text'}
									placeholder='رمز عبور'
									value={user.password}
									onChange={handlePassLogin}
								/>
								{showPwdIcon ? (
									<VisibilityIcon onClick={pwdIconChooser} />
								) : (
									<VisibilityOffIcon
										onClick={pwdIconChooser}
									/>
								)}
							</div>

							<Button
								variant='success'
								onClick={handleLoginSubmit}>
								login
							</Button>
						</form>
						<div
							className='SignInUp__loginRegister--footer'
							style={{ bottom: '-60px' }}>
							<ul>
								<li>فراموشی رمز عبور</li>
								<li onClick={loginRegisterChooser}>ثبت نام</li>
							</ul>
						</div>
					</div>
				) : (
					<div className='SignInUp__loginRegister'>
						<p>ایجاد حساب کاربری</p>
						<form className='SignInUp__loginRegister--form'>
							<input
								key='register'
								type='text'
								placeholder='نام کاربری'
							/>
							<div className='password-wrap'>
								<input
									key='register'
									type={showPwdIcon ? 'password' : 'text'}
									placeholder='رمز عبور'
								/>
								{showPwdIcon ? (
									<VisibilityIcon onClick={pwdIconChooser} />
								) : (
									<VisibilityOffIcon
										onClick={pwdIconChooser}
									/>
								)}
							</div>
							<div className='password-wrap'>
								<input
									type={showPwdIcon ? 'password' : 'text'}
									placeholder='تکرار رمز عبور'
								/>
								{showPwdIcon ? (
									<VisibilityIcon onClick={pwdIconChooser} />
								) : (
									<VisibilityOffIcon
										onClick={pwdIconChooser}
									/>
								)}
							</div>
							<input type='email' placeholder='ایمیل' />
							<Button variant='primary'>Register</Button>
						</form>
						<div
							className='SignInUp__loginRegister--footer'
							style={{ bottom: '-10px' }}>
							<ul>
								<li>فراموشی رمز عبور</li>
								<li onClick={loginRegisterChooser}>ورود</li>
							</ul>
						</div>
					</div>
				)}
			</div>
		</Rodal>
	)
}

export default SignInUp
