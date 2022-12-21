import React from 'react';
import { useSelector } from 'react-redux';

const ProtectedContent = (props) => {
	const role = useSelector((state) => state.user.role);
	return <>{role === props.requiredRole ? props.children : false}</>;
};

export default ProtectedContent;
