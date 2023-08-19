
import './Navbar.scss'
import { useEffect, useState, useRef, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CgSearch, CgProfile } from 'react-icons/cg';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Cart from '../Cart/Cart'
import Search from '../Search/Search'
import Profile from '../AuthComponents/Profile/Profile'
import { useNavigate } from 'react-router-dom'
import { OCcontext } from '../../../utils/dialogOpener';
import LoginButton from '../AuthComponents/login';
import { useAuth0 } from '@auth0/auth0-react';

function Navbar() {

    const { isAuthenticated } = useAuth0();
    const { ocState, ocDispatch } = useContext(OCcontext)
    const navigate = useNavigate();
    const element = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (element.current && !element.current.contains(event.target)) {
                ocDispatch('CLOSEALL')
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className="navbar">
                <div id='navspans' className='pages'>
                    <Link className='link' to='/'>Home</Link>
                    <Link className='link' to='/AllCategories'>Categories</Link>
                    <Link className='link' to='/About'>About</Link>
                </div>
                <div className='pages'>
                    <h1 onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>Dramazon</h1>
                </div>
                <div id='icons' className='pages'>
                    <CgSearch className='icon' onClick={() => ocDispatch('OPENSEARCH')} />
                    <AiOutlineShoppingCart className='icon' onClick={() => ocDispatch('OPENCART')} />
                    {
                        !isAuthenticated ? <LoginButton /> :
                            <CgProfile className='icon' onClick={() => ocDispatch('OPENPROFILE')} />
                    }
                </div>
            </div>
            <div ref={element}>
                {ocState.search && <Search />}
                {ocState.cart && <Cart />}
                {ocState.profile && <Profile />}
            </div>
        </>
    );
}

export default Navbar;