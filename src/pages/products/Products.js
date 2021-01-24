import { useContext } from 'react';
import { Row, Col } from 'react-atomize';
import Layout from '../../components/layout/Layout';
import { productsContext } from '../../context/products/productsContext';
import ProductCard from '../../components/ui/productCard/ProductCard';

const Products = () => {

    const { products } = useContext(productsContext);

    return (
        <Layout searchbar>
            <Row className='container'>
                {products.map((product, index) => (
                    <Col size={{xs:12,sm:6,lg:4,xl:3}} key={index}>
                        <ProductCard product={product}/>
                    </Col>
                ))}
            </Row>
        </Layout>
    )
}

export default Products
