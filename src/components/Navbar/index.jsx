import React from 'react';
import './index.scss';
import { BsFillCartFill } from 'react-icons/bs';

function Navbar() {
	return (
		<div className="nav-container">
			<div className="nav-content">
				<div className="nav-logo">Logo</div>
				<div className="nav-list">
					<ul>
						<li>Home</li>
						<li>Nossas Lojas</li>
						<li>FAQ</li>
					</ul>
				</div>
				<div className="nav-actions">
					<button>
						<BsFillCartFill />
					</button>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
