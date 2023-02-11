import { Link, useParams } from 'react-router-dom';
import Logo from '../../assets/Logo.svg'
import StyledHeader from './styles';

const Header = ({buttonText, path, handleClick}) => {

    

    return (
        <StyledHeader>
            <img src={Logo} alt="" />
            {buttonText && (<Link onClick={handleClick} to={path}>{buttonText}</Link>)}

        </StyledHeader>

        
    )
}

export default Header;