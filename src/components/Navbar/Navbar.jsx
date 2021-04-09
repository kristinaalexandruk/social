import React from 'react';
import { NavLink } from 'react-router-dom';
import c from './Navbar.module.css';

const Navbar = () => {
	return (
		<nav className={c.nav}>
			<div className={c.link}>
				<NavLink to="/profile" activeClassName={c.activeLink}>Profile</NavLink>
			</div>
			<div className={c.link}>
				<NavLink to="/dialogs" activeClassName={c.activeLink}>Messages</NavLink>
			</div>
			<div className={c.link}>
				<NavLink to="/news" activeClassName={c.activeLink}>News</NavLink>
			</div>
			<div className={c.link}>
				<NavLink to="/music" activeClassName={c.activeLink}>Music</NavLink>
			</div>
			<div className={c.link}>
				<NavLink to="/settings" activeClassName={c.activeLink}>Settings</NavLink>
			</div>
		</nav>
	)
}

export default Navbar;