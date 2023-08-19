import './SingleProduct.scss'
import RelatedProducts from './RelatedProducts/RelatedProducts'
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { FaPinterest } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchData } from '../../../utils/api';
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../../utils/context'

function SingleProduct() {

    const { state, dispatch } = useContext(AppContext)
    const [inCart, setInCart] = useState()
    const [quantity, setQuantity] = useState(1)

    const { id } = useParams();
    const { data, error, isLoading, refetch } = useQuery([id], () => fetchData(`products?populate=*&[filters][id]=${id}`))

    error && console.log(`Error: ${error}`)

    useEffect(() => {
        refetch()
        setInCart(state.some(item => item.product.id === data?.data[0].id))
        setQuantity(1)
    }, [id, state])

    const handleAddToCart = () => {
        if (!inCart) {
            dispatch({ type: 'ADD', payload: { product: data.data[0], quantity: quantity } })
            setInCart(true)
            setQuantity(1)
        }
    }

    return (
        <>
            <div className='single'>
                {isLoading ? <p>Loading...</p> : <><div className='prod-image'>
                    <img src={`${import.meta.env.VITE_REACT_APP_BASE_URL}${data?.data[0].attributes.img.data[0].attributes.url}`} alt="" />
                </div>
                    <div className='prod-details'>
                        <p className='title'>{data?.data[0].attributes.title}</p><br />
                        <p className='title'>₹ {data?.data[0].attributes.price}</p><br />
                        <p className='desc'>{data?.data[0].attributes.desc}</p><br />
                        <div className='buttons'>
                            {!inCart &&
                                <span className='quadiv'>
                                    <button className='quantity-button' onClick={() => setQuantity(quantity <= 1 ? 1 : quantity - 1)}>-</button>
                                    <span id='counter' className='quantity'>{quantity}</span>
                                    <button className='quantity-button' onClick={() => setQuantity(quantity + 1)}>+</button>
                                </span>
                            }
                            <button className='atc' style={{ backgroundColor: inCart && 'rgb(71, 164, 71)' }} onClick={handleAddToCart}>{inCart ? 'Go to Cart ►' : 'Add to Cart'}</button>
                        </div>
                        <br /><hr /><br />
                        <p>Category:Headphone</p><br />
                        <p>Share: <AiFillFacebook size='14' className='social-icons' /> <AiFillTwitterSquare size='14' className='social-icons' /> <AiFillInstagram size='14' className='social-icons' /> <AiFillLinkedin size='14' className='social-icons' /> <FaPinterest size='14' className='social-icons' /></p><br />
                    </div></>
                }
            </div >
            {data && <RelatedProducts productId={id} categoryId={data?.data[0].attributes.categories.data[0].id} />
            }
        </>
    );
}

export default SingleProduct;