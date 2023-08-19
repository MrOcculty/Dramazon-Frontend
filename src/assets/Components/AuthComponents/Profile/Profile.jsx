import './Profile.scss'
import { BsFillCartCheckFill } from 'react-icons/bs'
import { TbSquaresFilled } from 'react-icons/tb'
import { MdCall } from 'react-icons/md'
import { GoSignOut } from 'react-icons/go'
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from '../logout'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { OCcontext } from '../../../../utils/dialogOpener'

function Profile() {
    const { ocDispatch } = useContext(OCcontext)
    const navigate = useNavigate()
    const { user, isAuthenticated, isLoading } = useAuth0();
    console.log(useAuth0())
    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        isAuthenticated && (
            <div className='profile'>
                <div className='propic'>
                    <img src={user.picture} alt="" />
                    <p className='name ellipsis'>{user.name}</p>
                    <p className='email ellipsis'>{user.email}</p>
                </div>
                <br /><hr /><br />
                <div className='options'>
                    <p><BsFillCartCheckFill size={20} /> My Orders</p><br />
                    <p onClick={() => { navigate('/AllCategories'); ocDispatch('CLOSEALL') }}><TbSquaresFilled size={20} /> Categories</p><br />
                    <p><MdCall size={20} /> Contact us</p><br />
                    <p><GoSignOut size={20} /><LogoutButton /></p>
                </div>
            </div >
        )
    );
}

export default Profile;