import './Banner.scss'
import BannerImg from '../../../Graphics/Images/BannerImage.png'
import Curve from '../../../Graphics/Images/Curve.svg'

function Banner() {
    return (
        <>
            <div className='banner'>
                <div className='saleDiv'>
                    <p className='head'>SALES</p>
                    <p className='descript'>Let's put an end to your worries about wires hanging and getting tangled with BoAt and connect with any Bluetooth device, connect and play.</p>
                    <button className='btn1'>READ MORE</button><button className='btn2'>SHOP NOW</button>
                </div>
                <div className='imgDiv'>
                    <img src={BannerImg} alt="" />
                </div>
            </div>
            <img src={Curve} alt="" style={{ transform: 'translateY(-2px)', width: '100vw' }} />
        </>
    );
}

export default Banner;