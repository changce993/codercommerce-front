import { Div } from 'react-atomize';
import { Text, Anchor } from '../ui/Text';

const Footer = () => {
    return (
        <Div tag='footer' className='container' p='1rem 0'>
            <Text>
                Diseñado y desarrollado por <Anchor href='https://changcer.netlify.app/'>Ricardo Chance</Anchor>
            </Text>
            <Div h={{xs:'5rem',md:'0'}}/>
        </Div>
    )
}

export default Footer
