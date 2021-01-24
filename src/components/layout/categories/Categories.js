import { useContext } from 'react';
import Carousel from '../../ui/Carousel';
import Category from './Category';
import { productsContext } from '../../../context/products/productsContext';
import { mediaQueriesContext } from '../../../context/mediaQueries/mediaQueriesContext';
import { Heading } from '../../ui/Text';

const Categories = () => {

    const { categories } = useContext(productsContext);
    const { visibleSlides } = useContext(mediaQueriesContext);

    return (
        <div className='container'>
            <Heading m='1rem 0'>Categorias</Heading>
            <Carousel interval={4000} slides={categories} visibleSlides={visibleSlides}>
                {categories.map((category, index) =>
                    <Category
                        key={index}
                        category={category}
                        index={index}
                    />
                )}
            </Carousel>
        </div>
    )
}

export default Categories
