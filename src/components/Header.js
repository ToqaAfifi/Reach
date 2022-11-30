import mainLogo from '../assets/youtubeLogo.svg';
import minLogo from '../assets/youtubeMinLogo.svg';
import Search from './Search';

const Header = ({ dimensions }) => {

    let headerStyle = "headerDesktop";
    let logo = mainLogo;

    if (dimensions?.width <= 600) {
        logo = minLogo;
        headerStyle = "headerMobile";
    }

    return <div className={headerStyle}>
        <img src={logo} alt="logo" className='logo' />
        <Search />
    </div>
}

export default Header;