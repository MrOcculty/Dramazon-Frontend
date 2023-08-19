import './Cart.scss'
import EmptyCart from '../../Graphics/Images/EmptyCart.png'
import CartProduct from './CartProduct/CartProduct'
import { useContext } from 'react';
import { AppContext } from '../../../utils/context';
import { useNavigate } from 'react-router-dom'
import { OCcontext } from '../../../utils/dialogOpener';

function Cart() {

    const { ocDispatch } = useContext(OCcontext)
    const navigate = useNavigate()
    const { state } = useContext(AppContext)

    const subTotal = () => {
        let sum = 0
        const length = state.length
        for (let i = 0; i < length; i++) {
            sum = sum + (state[i].product.attributes.price * state[i].quantity)
        }
        return sum;
    }

    let key = 0
    return (
        <div className='cart'>
            <p className='heading shoppingCart'><span>Shopping Cart</span><span className='close' onClick={() => ocDispatch('CLOSEALL')}>✖</span></p>
            <div className='prods'>
                {
                    subTotal() > 0 ? state.map(item => {
                        key++
                        return (
                            <CartProduct key={key} product={item.product} productQuantity={item.quantity} />
                        );
                    })
                        : <div className='empty'>
                            <img src={EmptyCart} alt="" />
                            <p>Cart is Empty</p><br />
                            <button onClick={() => { ocDispatch('CLOSEALL'); navigate('/AllCategories') }}>Shop Now</button>
                        </div>
                }
            </div>
            <p className='heading total'>Subtotal: {subTotal()}</p>
        </div>
    );
}

export default Cart;