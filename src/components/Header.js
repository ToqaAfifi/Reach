import LoadingBar from 'react-redux-loading-bar';
import mainLogo from '../assets/youtubeLogo.svg';
import minLogo from '../assets/youtubeMinLogo.svg';
import Search from './Search';

const Header = ({ dimensions, layout }) => {

    let headerStyle = "headerDesktop";
    let logo = mainLogo;

    if (dimensions?.width <= 600) {
        logo = minLogo;
        headerStyle = "headerMobile";
    }

    return <div className={layout === "desktop" ? "headerContainer" : ''}>
        {layout === "desktop" && <LoadingBar className='loadingBar' />}
        <div className={headerStyle}>
            <img src={logo} alt="logo" className='logo' />
            <Search layout={layout} />
        </div>
    </div>
}

export default Header;