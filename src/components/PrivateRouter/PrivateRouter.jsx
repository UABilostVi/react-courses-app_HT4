import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
	const role = useSelector((state) => state.user.role);
	return role === 'admin' ? <Outlet /> : <Navigate to='/courses' />;
};

export default PrivateRoute;
