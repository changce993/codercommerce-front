import { useState, createContext } from 'react';
import productsJSON from './products.json';
import categoriesJSON from './categories.json';

export const productsContext = createContext();

const ProductsProvider = ({ children }) => {

    const [ products, setProducts ] = useState(productsJSON);
    const [ newest, setNewest ] = useState([]);
    const [ categories, setCategories ] = useState(categoriesJSON);
    const [ category, setCategory ] = useState();

    const reversed = products.reverse();

    [...Array(6)].map((item, index) => newest.push(reversed[index]));

    const carousels = [
        {
            title:'Lo más nuevo',
            carousel:products,
            interval: 4000
        },
        {
            title:'Computadoras',
            carousel:newest,
            interval: 4500
        },
        {
            title:'Celulares',
            carousel:products,
            interval: 5000
        }
    ];

    return (
        <productsContext.Provider value={{
            products,
            newest,
            categories,
            category,
            carousels,
            setCategory
        }}>
            {children}
        </productsContext.Provider>
    )
}

export default ProductsProvider;
