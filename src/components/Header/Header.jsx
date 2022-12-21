import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Button } from '../../common/Button';
import { Logo } from './components/Logo';

import { logoutThunk } from '../../store/user/thunk';
import { getUserName, getIsAuth } from './selectors';

import { BUTTON_LOGOUT_TEXT, BUTTON_LOGIN_TEXT } from '../../constants';

import classes from './Header.module.css';

const Header = () => {
	const isAuth = useSelector(getIsAuth);
	const userName = useSelector(getUserName);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const location = useLocation();

	function onLogin() {
		navigate('/login');
	}

	function onLogout() {
		dispatch(logoutThunk(onLogin));
	}

	const renderLog =
		location.pathname === '/login' || location.pathname === '/registration'
			? false
			: true;

	return (
		<header className={classes.header}>
			<div className='container'>
				<div className={classes.wrapper}>
					<Logo />
					{renderLog && (
						<>
							{!isAuth && (
								<Button buttonText={BUTTON_LOGIN_TEXT} onClick={onLogin} />
							)}
							{isAuth && (
								<div className={classes.auth}>
									<div>{userName}</div>
									<Button buttonText={BUTTON_LOGOUT_TEXT} onClick={onLogout} />
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
