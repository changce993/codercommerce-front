import { Div } from 'react-atomize';
import Navbar from './navbar/Navbar';
import Footer from './Footer';

const Layout = ({ children, colorLogo, searchbar }) => {
    return (
        <Div pos='relative'>
            <Navbar colorLogo={colorLogo} searchbar={searchbar} />
                { children }
            <Footer />
        </Div>
    )
}

export default Layout
