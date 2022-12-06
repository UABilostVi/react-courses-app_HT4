import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { Button } from '../../common/Button';
import { Logo } from './components/Logo';
import { BUTTON_LOGOUT_TEXT } from '../../constants';

import './header.css';

const Header = (props) => {
	const navigate = useNavigate();
	let location = useLocation();

	function onLogin() {
		navigate('/login');
	}

	let renderLog;
	if (location.pathname === '/login' || location.pathname === '/registration') {
		renderLog = false;
	} else renderLog = true;

	return (
		<header className='header'>
			<div className='container'>
				<div className='header-warpper'>
					<Logo className='logo' />
					{renderLog && (
						<>
							{!props.isLogedIn && (
								<Button buttonText='Login' onClick={onLogin} />
							)}
							{props.isLogedIn && (
								<div className='header__logout'>
									<div className='user-name'>Vit</div>
									<Button
										buttonText={BUTTON_LOGOUT_TEXT}
										onClick={props.logOut}
									/>
								</div>
							)}
						</>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
