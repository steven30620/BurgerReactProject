import 'HeaderStyle/Header.scss';
import logo from 'Assets/images/logo.png';
import TestButton from 'BodyComponents/TestButton';

function Header() {
	return (
		<header className="header">
			<div className="header-test"> </div>
			<img src={logo} className="header-logo" alt="logo" />
			<div className="header-link">
				<TestButton />
			</div>
		</header>
	);
}

export default Header;
