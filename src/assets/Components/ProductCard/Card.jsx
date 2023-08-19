import './Card.scss'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../../utils/context'
import { useNavigate } from 'react-router-dom'

function Card({ product }) {

    const navigate = useNavigate()
    const { state, dispatch } = useContext(AppContext)
    const [inCart, setInCart] = useState()

    useEffect(() => {
        setInCart(state.some(item => item.product.id === product.id))
    }, [state])

    const handleAddToCart = () => {
        if (!inCart) {
            dispatch({ type: 'ADD', payload: { product: product, quantity: 1 } })
            setInCart(true)
        }
    }

    return (
        <div className='card'>
            <div className='cardImg' onClick={() => navigate(`/SingleProduct/${product.id}`)}>
                <img src={`${import.meta.env.VITE_REACT_APP_BASE_URL}${product.attributes.img.data[0].attributes.url}`} alt="" />
            </div>
            <div className='cardsText'>
                <div>
                    <p>{product.attributes.title}</p>
                    <br />
                    <p>₹ {product.attributes.price}</p>
                    <br />
                </div>
                <button className='atc' style={{ backgroundColor: inCart && 'rgb(71, 164, 71)' }} onClick={handleAddToCart}>{inCart ? 'Go to Cart ►' : 'Add to Cart'}</button>
            </div>
        </div>
    );
}

export default Card;