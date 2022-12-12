import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Button } from '../../common/Button';
import { Logo } from './components/Logo';
import { logOutAction } from '../../store/user/actionCreators';
import { BUTTON_LOGOUT_TEXT } from '../../constants';

import './header.css';

const Header = () => {
	const isAuth = useSelector((state) => state.user.isAuth);
	const userName = useSelector((state) => state.user.name);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const location = useLocation();

	function onLogin() {
		navigate('/login');
	}

	function logOutHandler() {
		localStorage.removeItem('userToken');
		dispatch(logOutAction());
		navigate('/login');
	}

	const renderLog =
		location.pathname === '/login' || location.pathname === '/registration'
			? false
			: true;

	return (
		<header className='header'>
			<div className='container'>
				<div className='header-warpper'>
					<Logo className='logo' />
					{renderLog && (
						<>
							{!isAuth && <Button buttonText='Login' onClick={onLogin} />}
							{isAuth && (
								<div className='header__logout'>
									<div className='user-name'>{userName}</div>
									<Button
										buttonText={BUTTON_LOGOUT_TEXT}
										onClick={logOutHandler}
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
