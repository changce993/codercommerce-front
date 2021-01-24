import { Form, Input } from '../../ui/Form';
import { ReactComponent as Loupe } from '../../../assets/icons/loupe.svg';

const Searchbar = ({ w }) => {

    const handleSubmit = e => {
        e.preventDefault();

        window.location.href = '/products';
    }

    return (
        <Form onSubmit={handleSubmit} p='0'>
            <Input w={w}>
                <input
                    name='search'
                    placeholder='buscar'
                />
                <Loupe />
            </Input>
        </Form>
    )
}

export default Searchbar
