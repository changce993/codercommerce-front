import { Wrapper, Image, Text, Card, ImageContainer } from './StylesProduct';
import urlslug, { revert } from 'url-slug';

const ProductCard = ({ product }) => {

    const { slug, name, image, price } = product;

    const slugueado = urlslug(slug);
    // const deslugueado = revert(slugueado);

    return (
        <Card
            shadow='1'
            hoverShadow='4'
            transition
        >
            <a href={`/product/${slugueado}`}>
                <ImageContainer>
                    <Image src={image} alt={name}/>
                </ImageContainer>
                
                <Wrapper>
                    <Text>{name}</Text>
                    <Text>{price}</Text>
                </Wrapper>
            </a>
        </Card>
    )
}

export default ProductCard
