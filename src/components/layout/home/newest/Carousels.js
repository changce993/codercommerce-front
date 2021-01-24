import { useContext } from 'react';
import { Div } from 'react-atomize';
import { Heading } from '../../../ui/Text';
import Carousel from '../../../ui/Carousel';
import { mediaQueriesContext } from '../../../../context/mediaQueries/mediaQueriesContext';
import { productsContext } from '../../../../context/products/productsContext';
import SlideItem from './SlideItem';

const Carousels = () => {

    const { visibleSlides } = useContext(mediaQueriesContext);
    const { carousels } = useContext(productsContext);

    return (
        <Div className='container'>
            {carousels.map(({title, carousel, interval}, index) => (
                <div key={index}>
                    <Heading m={{b:'2rem'}}>{title}</Heading>
                    <Carousel
                        key={index}
                        interval={interval}
                        slides={carousel}
                        visibleSlides={visibleSlides}
                    >
                        {carousel.map((product, index) =>
                            <SlideItem
                                product={product}
                                index={index}
                                key={index}
                            />
                        )}
                    </Carousel>
                </div>
            ))}
        </Div>
    )
}

export default Carousels
