import './Newsletter.scss'
import { AiFillFacebook, AiFillLinkedin, AiFillInstagram, AiFillTwitterCircle  } from 'react-icons/ai';

function Newsletter() {
    return ( 
        <div className='newsletter' >
            
                <p className='fl'>NEWSLETTER</p>
                <p className='sl'>SIGN UP FOR LATEST UPDATES AND OFFERS</p>
                <p className='tl'> <input type="text" className='insert' placeholder='Email Address'/> <button className='insert'>SUBSCRIBE</button> </p>
                <p className='fol'>Will be used in adccordance with our Privacy Policy</p>
                <p className='fil'>
                    <span className='icos'><AiFillFacebook /></span>
                    <span className='icos'><AiFillInstagram /></span>
                    <span className='icos'><AiFillTwitterCircle /></span>
                    <span className='icos'><AiFillLinkedin /></span>
                </p>
        </div>
     );
}

export default Newsletter;