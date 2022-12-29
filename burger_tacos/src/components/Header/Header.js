import logo from '../../assets/images/logo.png';
import '../../styles/HeaderStyle/Header.scss';
import TestButton from '../Body/TestButton';

function Header() {
	return (
		<header className="header">
			<div className="header-test"> test</div>
			<img src={logo} className="header-logo" alt="logo" />
			<div className="header-link">
				<TestButton />
			</div>
		</header>
	);
}

export default Header;
