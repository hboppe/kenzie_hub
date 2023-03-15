import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.svg'; // ver esse erro no /pergunta
import StyledHeader from './styles';

interface IHeaderProps {
  buttonText?: string;
  path?: string;
  handleClick?: () => void;
  headerClassName: string;
  linkClassName?: string;
}

const Header = ({buttonText, path='', handleClick, headerClassName, linkClassName}: IHeaderProps) => {

    return (
        <StyledHeader className={headerClassName}>
            <img src={Logo} alt="" />
            {buttonText && (<Link className={linkClassName} onClick={handleClick} to={path}>{buttonText}</Link>)}

        </StyledHeader>
       
    )
}

export default Header;