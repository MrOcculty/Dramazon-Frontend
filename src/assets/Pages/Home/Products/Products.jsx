import './Products.scss'
import Card from '../../../Components/ProductCard/Card'
import { fetchData } from '../../../../utils/api'
import { useQuery } from '@tanstack/react-query'

function Products() {

    const { data, error, isLoading } = useQuery(['products'], () => fetchData('products?populate=*&pagination[limit]=8'))

    error && console.log(`Error: ${error}`);

    return (
        <div className='products'>
            <p className='head'>PRODUCTS</p>
            <div className='list'>
                {isLoading ? <p>Loading...</p> :
                    data?.data.map(item => {
                        return (
                            <Card
                                key={item.id}
                                product={item}/>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Products;