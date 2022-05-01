import React from 'react';
import './index.scss';

function Navbar() {
	return (
		<div className="nav-container">
			<div className="nav-content">
				<div className="nav-logo">Logo</div>
				<div className="nav-list">
					<ul>
						<li>Home</li>
						<li>Nossas Lojas</li>
						<li>Ajuda</li>
						<li></li>
					</ul>
				</div>
				<div className="nav-actions">
					<button>Botão carrinho</button>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
