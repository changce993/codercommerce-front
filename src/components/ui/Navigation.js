import { useContext } from 'react';
import { Div } from 'react-atomize';
import { Link } from './Text';
import { ReactComponent as Cart } from '../../assets/icons/cart.svg';
import Home from '../../assets/icons/home.svg';
import Store from '../../assets/icons/store.svg';
import Account from '../../assets/icons/account.svg';
import { mediaQueriesContext } from '../../context/mediaQueries/mediaQueriesContext';

const Navigation = ({ textColor }) => {

    const { isTab } = useContext(mediaQueriesContext);
    let links = [
        {name:'Inicio', icon:Home, url:'/'},
        {name:'Productos', icon:Store, url:'/products'},
        {name:'Ingresar', icon:Account, url:'/login'},
        {name:'Registrarme', icon:Home, url:'/signup'},
    ];

    return (
        <Div
            d='flex'
            pos={{xs:'fixed',md:'relative'}}
            bottom='0'
            left='0'
            w={{xs:'100%',md:'auto'}}
            align='center'
            justify={{xs:'space-around',md:''}}
            bg='white'
            style={{zIndex:1000}}
        >
            {links.map(({name, icon, url}, index) => (
                <Link key={index} to={url} textcolor={textColor}>
                    {isTab ? <img src={icon}/> : <>{name}</>}
                </Link>
            ))}

            <a href='/cart'>
                <Cart/>
            </a>
        </Div>
    )
};

export default Navigation;
