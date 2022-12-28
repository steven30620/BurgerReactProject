import logo from '../../assets/images/logo.png';
import '../../styles/HeaderStyle/Header.scss';

function Header() {
	return (
		<header className="header">
			<img src={logo} className="header-logo" alt="logo" />
		</header>
	);
}

export default Header;
