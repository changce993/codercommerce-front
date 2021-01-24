import { Slide } from "pure-react-carousel";
import { CategoryCard } from './StylesCategories';

const Category = ({ category, index }) => {

    const { name, color, image } = category;

    return (
        <Slide index={index}>
            <a href={`category/${name}`}>
                <CategoryCard bg={color} transition>
                    <img src={image} alt={name}/>
                    <p>{name}</p>
                </CategoryCard>
            </a>
        </Slide>
    )
}

export default Category;
