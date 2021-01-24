import { Div } from 'react-atomize';
import Logo from '../../ui/Logo';
import Navigation from '../../ui/Navigation';
import Searchbar from './Searchbar';

const Navbar = ({ colorLogo, textColor, bg, searchbar }) => {

    return (
        <Div tag='nav' bg={bg}>
            <Div className='container' d='flex' justify='space-between' align='center' h='5rem'>
                <Logo colorLogo={colorLogo} />
                <Div d='flex' align='center'>
                
                    {searchbar && (<Searchbar w='15rem' />)}

                    <Navigation textColor={textColor} />
                </Div>
            </Div>
        </Div>
    )
}

export default Navbar
