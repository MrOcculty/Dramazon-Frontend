import './Category.scss'
import { useParams } from 'react-router-dom'
import { fetchData } from '../../../utils/api'
import { useQuery } from '@tanstack/react-query'
import Card from '../../Components/ProductCard/Card';

function Category() {

    const { id } = useParams();

    const { data, error, isLoading } = useQuery(['singleProduct'], () => fetchData(`products?populate=*&[filters][categories][id]=${id}`))

    error && console.log(`Error: ${error}`)

    return (
        <div className='category'>
            <h2>{data?.data[0].attributes.categories.data[0].attributes.Title}</h2>
            <br />
            <div className='products'>
                {isLoading ? <p>Loading...</p> : data?.data.map(item =>
                    <Card
                        key={item.id}
                        product={item} />
                )}
            </div>
        </div>
    );
}

export default Category;