import React from 'react';
import { Link,Router } from 'react-router-dom';
import "./navigation.css"

const Navigation = () => {
	return(
		<>
		<div className="navigation">
		<Link to="/home">Home</Link>
		<Link to="/about">About</Link>
		<Link to="/product">Product</Link>
		<Link to="/login">Login</Link>
		<Link to="/register">Register</Link>
		</div>
		</>
	)
};

export default Navigation;
