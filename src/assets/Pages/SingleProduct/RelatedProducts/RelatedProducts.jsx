import './RelatedProducts.scss'
import Card from '../../../Components/ProductCard/Card';
import { fetchData } from '../../../../utils/api';
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react';

function RelatedProducts({ productId, categoryId }) {

    const { data, error, isLoading, refetch } = useQuery(['related'], () => fetchData(`products?populate=*&[filters][id][$ne]=${productId}&[filters][categories][id]=${categoryId}&pagination[limit]=4`))

    useEffect(() => { refetch() }, [productId])

    error && console.log(`Error: ${error}`)

    return (
        <div className='related'>
            <p className='heading'>RELATED PRODUCTS</p>
            <div className='prods'>
                {isLoading ? <p>Loading...</p> : data?.data.map(item => {
                    return (
                        <Card
                            key={item.id}
                            product={item} />
                    );
                })}
            </div>
        </div>
    );
}

export default RelatedProducts;