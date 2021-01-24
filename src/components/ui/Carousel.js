import { Icon } from 'react-atomize';
import styled from 'styled-components';
import { CarouselProvider, Slider, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const Buttons = styled.div`
    display:flex;
    column-gap:1rem;
    justify-content:center;
    align-items:center;
    margin:1rem 0;

    .btn{
        outline:none;
        border:none;
        background-color: transparent;
    }
`

const Carousel = ({
    slides,
    children,
    naturalSlideHeight,
    visibleSlides,
    isIntrinsicHeight = true,
    interval = 5000
}) => {

    return (
        <CarouselProvider
            interval={interval}
            isPlaying={true}
            naturalSlideWidth={100}
            naturalSlideHeight={naturalSlideHeight}
            totalSlides={slides.length}
            visibleSlides={visibleSlides}
            infinite={true}
            isIntrinsicHeight={isIntrinsicHeight}
        >
            <Slider>{children}</Slider>
            <Buttons>
                <ButtonBack className='btn'>
                    <Icon name="LeftArrow" size="24px" hoverColor='primary100'/>
                </ButtonBack>

                <ButtonNext className='btn'>
                    <Icon name="RightArrow" size="24px" hoverColor='primary100'/>
                </ButtonNext>
            </Buttons>
        </CarouselProvider>
    )
}

export default Carousel
