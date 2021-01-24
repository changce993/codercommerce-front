import { ReactComponent as LogoSVG } from '../../assets/brand/logo.svg';

const Logo = ({ colorLogo }) => {

    return (
        <a href='/'>
            <LogoSVG
                height='2.5rem'
                width='2.5rem'
                fill={colorLogo}
            />
        </a>
    )
}

export default Logo;
