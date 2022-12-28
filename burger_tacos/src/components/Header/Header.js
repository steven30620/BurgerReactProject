import logo from '../../assets/images/logo.png';
import '../../styles/HeaderStyle/Header.scss';
import { Link } from 'react-router-dom';
function Header() {
	return (
		<header className="header">
			<div className="header-test"> test</div>
			<img src={logo} className="header-logo" alt="logo" />
			<div className="header-link">
				<Link
					style={{ textDecoration: 'none' }}
					className="header-link1"
					to="/"
				>
					Login/LogOut
				</Link>
				<br />
				<Link
					style={{ textDecoration: 'none' }}
					className="header-link2"
					to="/home"
				>
					Home
				</Link>
			</div>
		</header>
	);
}

export default Header;
