import { useContext, useState } from 'react';
import './CartProduct.scss'
import { AppContext } from '../../../../utils/context';
import { MdDeleteForever } from 'react-icons/md'
import { useAuth0 } from '@auth0/auth0-react';

function CartProduct({ product, productQuantity }) {

    const { user, getIdTokenClaims } = useAuth0();
    const { dispatch } = useContext(AppContext)
    const [quantity, setQuantity] = useState(productQuantity)

    const onDecrement = () => {
        setQuantity(quantity <= 1 ? 1 : quantity - 1)
        dispatch({ type: 'DECREMENT', payload: product.id })
        console.log(getIdTokenClaims)
    }

    const onIncrement = () => {
        setQuantity(quantity + 1)
        dispatch({ type: 'INCREMENT', payload: product.id })
    }

    return (
        <div className="cp">
            <img src={`${import.meta.env.VITE_REACT_APP_BASE_URL}${product.attributes.img.data[0].attributes.formats.small.url}`} alt="" />
            <div className='info'>
                <p className='name'>{product.attributes.title}</p>
                <p className='name'>₹ {product.attributes.price}</p>
                <div>
                    <span className='quant'>
                        <button className='insert' onClick={onDecrement}>-</button>
                        <span className='insert'>{quantity}</span>
                        <button className='insert' onClick={onIncrement}>+</button>
                    </span>
                    <MdDeleteForever onClick={() => dispatch({ type: 'REMOVE', payload: product.id })} className='icon' />
                </div>
            </div>
        </div>
    );
}

export default CartProduct;