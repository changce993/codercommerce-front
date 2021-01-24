import Layout from '../../components/layout/Layout';
import Header from '../../components/layout/home/header/Header';
import Carousels from '../../components/layout/home/newest/Carousels';
import Categories from '../../components/layout/categories/Categories';

const Home = () => {

    return (
        <Layout className='container'>
            <Header/>
            <Categories/>
            <Carousels/>
        </Layout>
    )
}

export default Home
