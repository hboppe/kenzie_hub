import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.svg'
import StyledHeader from './styles';

const Header = ({buttonText, path, handleClick, headerClassName, linkClassName}) => {

    return (
        <StyledHeader className={headerClassName}>
            <img src={Logo} alt="" />
            {buttonText && (<Link className={linkClassName} onClick={handleClick} to={path}>{buttonText}</Link>)}

        </StyledHeader>

        
    )
}

export default Header;