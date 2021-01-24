import { Div } from 'react-atomize';
import { Title, Heading } from '../../../ui/Text';
import Searchbar from '../../navbar/Searchbar';

const Header = () => {
    return (
        <Div className='container' p={{xs:'3rem 0',sm:'5rem 0'}}>
            <Div
                tag='header'
                d='inline-block'
                d='flex'
                align='center'
                justify='center'
                flexDir='column'
            >
                <div className='textGradient'>
                    <Title textAlign='center' tag='h1' d='inline-block'>
                        Code market place
                    </Title>

                    <Heading textAlign='center' m={{b:'3rem'}}>
                        Los mejores cursos de programacion en un solo lugar
                    </Heading>
                </div>
                <Searchbar/>
            </Div>
        </Div>
    )
}

export default Header
