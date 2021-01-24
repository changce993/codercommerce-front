import { createContext } from 'react';
import { useMediaQuery } from 'react-responsive';

export const mediaQueriesContext = createContext();

const MediaQueriesProvider = ({ children }) => {

    const isMobile = useMediaQuery({ query: '(max-width:600px)' });
    const isTab = useMediaQuery({ query: '(max-width:767px)' });
    const isTabLand = useMediaQuery({ query: '(max-width:992px)' });
    const isLaptop = useMediaQuery({ query: '(max-width:1200px)' });

    let visibleSlides;

    if(isMobile){
        visibleSlides = 1;
    } else if(isTab){
        visibleSlides = 2;
    } else if(isTabLand){
        visibleSlides = 3;
    } else if(isLaptop){
        visibleSlides = 4;
    } else{
        visibleSlides = 5;
    };

    return (
        <mediaQueriesContext.Provider value={{
            isMobile,
            isTab,
            isTabLand,
            isLaptop,
            visibleSlides
        }}>
            { children }
        </mediaQueriesContext.Provider>
    )
}

export default MediaQueriesProvider;
