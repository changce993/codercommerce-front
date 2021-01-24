import { Slide } from "pure-react-carousel";
import ProductCard from '../../../ui/productCard/ProductCard';

const SlideItem = ({ product, index }) => {

    return (
        <Slide index={index}>
            <ProductCard product={product}/>
        </Slide>
    )
}

export default SlideItem
