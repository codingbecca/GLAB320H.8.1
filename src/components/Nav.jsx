import { Link } from 'react-router-dom';

export default function Nav(){
    return(
        <nav className='nav'>
                    <Link to='/'>CRYPTO PRICES</Link>
                    <Link to='/currencies'>CURRENCIES</Link>
        </nav>
    )
}